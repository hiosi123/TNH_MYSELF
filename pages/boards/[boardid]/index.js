//동적 라우팅
import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { useEffect } from "react";
import jwt from 'jsonwebtoken'
import {
    Title, 
    Wrapper,
    InputWrapper,
    Label,
    ImageWrapper,
    UploadButton,
    SubmitButton,
    ButtonWrapper,
  } from '../../../styles/emotion'
import { accessTokenState } from '../../../src/commons/store';
import { getDate } from '../../../src/commons/libraries/utils';
import { getAccessToken } from '../../../src/commons/libraries/getAccessToken';

const FETCH_BOARD = gql`
    query fetchBoard($boardid: Float!){
        fetchBoard(boardid: $boardid){
            id
            title
            content
            createdAt
            url
            user {
                userid
            }

        }
    }
`

export default function StaticRoutedPage(){
    const router = useRouter()
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState)


    useEffect(() => {
        // const mylocalstorageAccessToken = localStorage.getItem('accessToken')
        // setAccessToken(mylocalstorageAccessToken || "")
        getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken)
        })
    },[])


    const { data } = useQuery(FETCH_BOARD, {
        variables: {boardid: Number(router.query.boardid)}
    }) 

    const onClickUpdate = () => {
        // const checkAccessToken = jwt.verify(accessToken, 'myAccessKey');

        try{
            // if(checkAccessToken.userid !== data?.fetchBoard.user.userid){
            //     throw new Error('수정할 권한이 없습니다')
            // }
            router.push(`/boards/${router.query.boardid}/update`)
        } catch(error) {
            alert(error)
        }
    }

    const onClickBoardList = () => {
        router.push(`/boards`)
    }

    console.log(data)
    //optional chaining, 데이터가 있으면 보여줘
    return (
        <Wrapper>
            <InputWrapper>
                <Label>게시자</Label>
                <div>{data?.fetchBoard.user.userid}</div>
            </InputWrapper>
            <InputWrapper>
                <Label>제목</Label>
                <div>{data?.fetchBoard.title}</div>
            </InputWrapper>
            <InputWrapper>
                <Label>날짜</Label>
                <div>{getDate(data?.fetchBoard.createdAt)}</div>
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <div>{data?.fetchBoard.content}</div>
            </InputWrapper>
            <ImageWrapper>
            <Label>파일 첨부</Label>
                <div>{data?.fetchBoard.url}</div>
                <img src={data?.fetchBoard.url}/>
            </ImageWrapper>
            <ButtonWrapper>
                <SubmitButton onClick={onClickUpdate}>수정하기</SubmitButton>
                <SubmitButton onClick={onClickBoardList}>목록</SubmitButton>
            </ButtonWrapper>
        </Wrapper>            
    )
}
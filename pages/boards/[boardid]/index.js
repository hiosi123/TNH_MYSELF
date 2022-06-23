//동적 라우팅
import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
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

const FETCH_BOARD = gql`
    query fetchBoard($boardid: Float!){
        fetchBoard(boardid: $boardid){
            id
            title
            content
            url
            user {
                userid
            }

        }
    }
`

export default function StaticRoutedPage(){
    const router = useRouter()


    const { data } = useQuery(FETCH_BOARD, {
        variables: {boardid: Number(router.query.boardid)}
    }) 

    const onClickUpdate = () => {
        router.push(`/boards/${router.query.boardid}/update`)
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
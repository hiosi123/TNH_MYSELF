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

        }
    }
`

export default function StaticRoutedPage(){
    const router = useRouter()


    const { data } = useQuery(FETCH_BOARD, {
        variables: {boardid: Number(router.query.boardid)}
    }) 
    console.log(data)
    //optional chaining, 데이터가 있으면 보여줘
    return (
        <Wrapper>
        <Title> 게시판 </Title> 
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
            <UploadButton>+</UploadButton>
            <UploadButton>+</UploadButton>
            <UploadButton>+</UploadButton>
        </ImageWrapper>
        <ButtonWrapper>
            <SubmitButton>수정하기</SubmitButton>
        </ButtonWrapper>
        </Wrapper>            
    )
}
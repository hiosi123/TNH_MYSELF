import {
  Title, 
  Wrapper,
  InputWrapper,
  Label,
  Contents,
  ImageWrapper,
  UploadButton,
  SubmitButton,
  ButtonWrapper,
  Subject,
  Error,
} from '../../../../styles/emotion'
import {useRouter} from 'next/router'
import { useMutation, gql, useQuery} from '@apollo/client'
import {useState} from 'react'


const UPDATE_BOARD = gql`
    mutation updateBoard($boardid: Float!, $title: String!, $content: String!, $url: String) {
        updateBoard(boardid: $boardid, title: $title, content: $content, url: $url){
            id
            title
            content
            viewcount
        }
    }
`

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

export default function BoardEditPage() {
  const router = useRouter()

  const [updateBoard] = useMutation(UPDATE_BOARD)
  const [title, setTitle] = useState('')
  const [content, setContents] = useState('')

  const { data } = useQuery(FETCH_BOARD, {
    variables: {boardid: Number(router.query.boardid)}
  }) 

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const onChangeContents = (event) => {
    setContents(event.target.value)
  }

  const onClickUpdate = async () => {
    try{
      const result = await updateBoard({
        variables: {boardid: Number(router.query.boardid), title: title, content: content}
      })
      alert('게시물 수정에 성공하였습니다!')
      //이동
      router.push(`/boards/${router.query.boardid}`)
    } catch (error) {
      alert(error.message)
    }
    
  }

  return (
    <Wrapper>
      <Title> 게시판 수정 </Title> 
      <InputWrapper>
        <Label>제목</Label>
        <Subject type='text' onChange={onChangeTitle} defaultValue={data?.fetchBoard.title}/>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents onChange={onChangeContents} defaultValue={data?.fetchBoard.content}/>
      </InputWrapper>
      <ImageWrapper>
        <Label>파일 첨부</Label>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
      </ImageWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={onClickUpdate}>수정하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  )
}
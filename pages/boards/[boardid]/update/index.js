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
import {useEffect, useState} from 'react'


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

const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]!){
    uploadFile(files: $files)
  }
`

export default function BoardEditPage() {
  const router = useRouter()

  const [uploadFile] = useMutation(UPLOAD_FILE)
  const [updateBoard] = useMutation(UPDATE_BOARD)
  const [imageUrl, setImageUrl] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContents] = useState('')

  useEffect(() => {
    if(!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다!!")
      router.push('/login')
    }
  },[])

  const { data } = useQuery(FETCH_BOARD, {
    variables: {boardid: Number(router.query.boardid)}
  }) 

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const onChangeContents = (event) => {
    setContents(event.target.value)
  }
  const onClickRollback = (event) => {
    router.push(`/boards/${router.query.boardid}`)
  }

  const onClickUpdate = async () => {
    try{
      const result = await updateBoard({
        variables: {boardid: Number(router.query.boardid), title: title, content: content, url: imageUrl? imageUrl: "empty"}
      })
      alert('게시물 수정에 성공하였습니다!')
      //이동
      router.push(`/boards/${router.query.boardid}`)
    } catch (error) {
      console.log(error)
      // router.push('/boards')
    }
    
  }
  const onChangeFile = async (event) => {
    console.log(event)
    const files = event.target.files[0]
    console.log(files)

    try{
      const result = await uploadFile({
        variables: {files : files}
      })
      console.log(result.data?.uploadFile[3])
  
      setImageUrl(result.data?.uploadFile[3])
    }catch(error){
      console.log(error)
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
        <Label>찾아보기</Label>
        <input type="file" onChange={onChangeFile}/>
        {/* <div>{imageUrl? imageUrl :data?.fetchBoard.url}</div> */}
        <img style={{width:"500px", height: "300px"}} src={imageUrl? imageUrl:data?.fetchBoard.url}/>
      </ImageWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={onClickUpdate}>수정완료</SubmitButton>
        <SubmitButton onClick={onClickRollback}>수정취소</SubmitButton>
      </ButtonWrapper>


    </Wrapper>
  )
}
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
} from '../../../styles/emotion'
import {useState} from 'react'
import { useMutation, gql} from '@apollo/client'
import { useRouter } from 'next/router'
import { Modal } from 'antd'

const CREATE_BOARD = gql`
    mutation createBoard($title: String!, $content: String!, $url: String) {
        createBoard(title: $title, content: $content, url: $url){
            id
            title
            content
            viewcount
        }
    }
`

const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]!){
    uploadFile(files: $files)
  }
`


export default function BoardPage() {
  const router = useRouter()

  const [createBoard] = useMutation(CREATE_BOARD)
  const [uploadFile] = useMutation(UPLOAD_FILE)

  const [imageUrl, setImageUrl] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContents] = useState('')

  const[titleError, setTitleError] = useState('')
  const[contentsError, setContentsError] = useState('')


  const onChangeTitle = (event) => {
    setTitle(event.target.value)

    if(event.target.value !==''){
      setTitleError('');
    }
  }

  const onChangeContents = (event) => {
    setContents(event.target.value)

    if(event.target.value !==''){
      setContentsError('');
    }
  }

  const onClickSubmit = async () => {
    if(title === ''){
      setTitleError('제목을 입력해주세요')
    }
    if(content === ''){
      setContentsError('내용을 입력해주세요')
    }
    if(title !== '' && content !==''){
      try{
        const result = await createBoard({
          variables: {title: title, content: content, url: imageUrl? imageUrl: 'noFIle'}
        })
        console.log(result)
        alert('게시물 등록에 성공하였습니다!')
        //이동
        router.push(`/boards/${result.data.createBoard.id}`)
      } catch(error) {
        console.log(error.message)
      }
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
      if(error === 'Unauthorized'){
        alert('로그인을 먼저 진행해주세요')
      }
      console.log(error)
    }
 
  }

  const onClickRollback = (event) => {
    router.push('/boards')
  }

  return (
    <Wrapper>
    <Title> 게시판 작성 </Title> 
    <InputWrapper>
      <Label>제목</Label>
      <Subject type='text' placeholder='제목을 작성해주세요' onChange={onChangeTitle} />
      <Error>{titleError}</Error>
    </InputWrapper>
    <InputWrapper>
      <Label>내용</Label>
      <Contents placeholder='내용을 작성해주세요' onChange={onChangeContents} />
      <Error>{contentsError}</Error>
    </InputWrapper>
    <ImageWrapper>
      <Label>파일 첨부</Label>
      <input type="file" onChange={onChangeFile}/>
      <img src={imageUrl}/>
    </ImageWrapper>
    <ButtonWrapper>
      <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
      <SubmitButton onClick={onClickRollback}>등록취소</SubmitButton>
    </ButtonWrapper>
    </Wrapper>
    
  )
}

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

export default function AAAPage() {
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')

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

  const onClickSubmit = () => {
    if(title === ''){
      setTitleError('제목을 입력해주세요')
    }
    if(contents === ''){
      setContentsError('내용을 입력해주세요')
    }
    if(title !== '' && contents !==''){
      alert('게시물 등록에 성공하였습니다!')
    }
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
      <UploadButton>+</UploadButton>
      <UploadButton>+</UploadButton>
      <UploadButton>+</UploadButton>
    </ImageWrapper>
    <ButtonWrapper>
      <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
    </ButtonWrapper>
    </Wrapper>
    
  )
}

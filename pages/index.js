import Head from 'next/head'
import { useRouter } from 'next/router'
import { InputWrapper, SubmitButton, Title, Wrapper } from '../styles/emotion'

export default function Home() {
  const router = useRouter()

  const onClickLogin = () => {
    router.push('/login')
  }

  const onClickSingup = () => {
    router.push('/signupplz')
  }

  const onClickboards = () => {
    router.push('/boards')
  }

  return(
    <Wrapper>
      <InputWrapper>
        <Title>TNH</Title>
      </InputWrapper>
      <InputWrapper>
        <SubmitButton onClick={onClickboards}>게시판</SubmitButton>
        <SubmitButton onClick={onClickLogin}>로그인</SubmitButton>
        <SubmitButton onClick={onClickSingup}>회원가입</SubmitButton>
      </InputWrapper>
    </Wrapper>

  )
}

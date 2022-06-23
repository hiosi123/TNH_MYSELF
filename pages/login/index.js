import styled from '@emotion/styled'
import {
  ButtonWrapper,
  InputWrapper,
  Title,
  Wrapper,
  SubmitButton
} from '../../styles/emotion'
import { useState } from 'react'
import { useMutation, gql} from '@apollo/client'
import { useRouter } from 'next/router'
import { useRecoilState } from "recoil";
import { accessTokenState } from '../../src/commons/store'

const LOGIN = gql`
    mutation login($userid: String!, $password: String!){
      login(userid: $userid, password: $password)
    }
`

export default function LoginPage() {
    const[, setAccessToken] = useRecoilState(accessTokenState)
    const router = useRouter()
    const [userid, setUserid] = useState('')
    const [password, setPassword] = useState('')
    const [login] = useMutation(LOGIN)

    const onChangeUserid = (event) => {
      setUserid(event.target.value)
    }
    const onChangePassword = (event) => {
      setPassword(event.target.value)
    }

    const onClickLogin = async() => {
      try{
        const result = await login({
          variables: {userid: userid, password: password}
        })

        const accessToken = result.data.login
        setAccessToken(accessToken)
        // 브라우저 로컬 스토리지에 저장하는데 별로 좋은 방법은 아님 (쿠키로 수정 요구)
        localStorage.setItem("accessToken",accessToken)
  
        alert('로그인에 성공하였습니다.')
        router.push('/boards')
      } catch(error) {
        console.log(error.message)
      }
    }
    
    const onClickSingup = (evet) => {
      router.push('/signupplz')
    }


  return (
    <Wrapper>
      <InputWrapper>
      <Title> 아이디 </Title> 
      <input style={{width:"200px", height: "30px"}} type="text" onChange={onChangeUserid} />
      </InputWrapper>
      <InputWrapper>
      <Title> 비밀번호 </Title> 
      <input style={{width:"200px", height: "30px"}} type="password" onChange={onChangePassword} />
      </InputWrapper>
      <InputWrapper>
      <SubmitButton onClick={onClickLogin}>로그인</SubmitButton>
      <SubmitButton onClick={onClickSingup}>회원가입</SubmitButton>
      </InputWrapper>
    </Wrapper>
  )
}

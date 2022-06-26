import {useState} from 'react'
import {Error, InputWrapper, Wrapper, Title, SubmitButton} from '../../styles/emotion'
import { useMutation, gql} from '@apollo/client'
import { useRouter } from 'next/router'

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!){
      createUser(createUserInput: $createUserInput){
          userid
        }
      }
`

export default function SingupStatePage() {
  const router = useRouter()
  const [userid, setUserid] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [createUser] = useMutation(CREATE_USER)


  const onChangeUserid = (event) => {
    //event 는 변경 사항에 대한 내용 => 
    //event.target => 태그 전체
    //event.target.value => 우리가 입력한 값
    setUserid(event.target.value)
  }

  function onChangePassword1(event) {
    setPassword1(event.target.value)
  }

  function onChangePassword2(event) {
    setPassword2(event.target.value)
  }

  const onClickSignup = async(event) =>{
    
    if(password1 !== password2){
      setPasswordError('비밀번호가 일치하지 않습니다.')
    } else{
      try{
        const result = await createUser({
          variables: {createUserInput:{userid: userid, password: password1}}
        })
        alert(`${result.data.createUser.userid}님 회원가입을 축하합니다.`)
        router.push('/login')
      }catch(error) {
        console.log(error)
        alert('이미 등록된 아이디 입니다.')
      }
    }
  }

  return (
    <Wrapper>
      <InputWrapper>
        <Title> 아이디 </Title> 
        <input style={{width:"200px", height: "30px"}} type='text' onChange={onChangeUserid} /> 
      </InputWrapper>
      <InputWrapper>
        <Title> 비밀번호 </Title> 
        <input style={{width:"200px", height: "30px"}} type='password' onChange={onChangePassword1} />
        <Error>{passwordError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Title> 비밀번호 확인</Title> 
        <input style={{width:"200px", height: "30px"}} type='password' onChange={onChangePassword2} />
      </InputWrapper>
      <InputWrapper>
        <SubmitButton onClick={onClickSignup}>회원가입</SubmitButton>
      </InputWrapper>
    </Wrapper>
  )
}
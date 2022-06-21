import {useState} from 'react'
import {Error} from '../../styles/emotion'

export default function SingupStatePage() {
  const [userid, setUserid] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [passwordError, setPasswordError] = useState('')

  function onChangeUserid(event){
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

  function onClickSignup(event){
    
    if(password1 !== password2){
      setPasswordError('비밀번호가 일치하지 않습니다.')
    } else{
      alert('회원가입을 축하합니다.')
    }
  }

  return (
    <div>
      아이디: <input type='text' onChange={onChangeUserid} /> <br/>
      비밀번호: <input type='password' onChange={onChangePassword1} /><br/>
      비밀번호 확인: <input type='password' onChange={onChangePassword2} /><br/>
      <Error>{emailError}</Error>
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  )
}
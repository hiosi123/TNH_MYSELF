import styled from '@emotion/styled'


export default function AAAPage() {
    // 여기는 자바스크립트 쓰는곳 
    //Mytitle 의 첫자는 대문자
  const MyTitle = styled.div` 
    color: black;
  `
  const MyEmail = styled.input`
    width: 200px;
  `

  return (
    <MyTitle>
        로그인
        <MyEmail type='text'/>
        <img src='/aaa/lotto.png'/>
    </MyTitle>
  
  )
}

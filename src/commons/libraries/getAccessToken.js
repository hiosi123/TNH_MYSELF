import { GraphQLClient, gql } from 'graphql-request'



const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken{
      restoreAccessToken
  }
`

export async function getAccessToken() {
  try{
    // 2. refreshToken으로 accessToken을 재발급 받기
    const graphQLClient = new GraphQLClient(
        "http://localhost:3001/graphql",
        {credentials: "include"}
    )

    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN)                     
    const newAccessToken = result.restoreAccessToken
    return newAccessToken
    //재발급 받은 accessToken 저장하기
  } catch (error) {
      console.log(error.message)
  }



}
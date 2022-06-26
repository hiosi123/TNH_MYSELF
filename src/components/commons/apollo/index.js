import { accessTokenState } from "../../../commons/store"
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client'
import { useRecoilState } from 'recoil'
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { onError } from '@apollo/client/link/error'
import { getAccessToken } from "../../../commons/libraries/getAccessToken";


export default function ApolloSetting(props) {
    const [accessToken,setAccessToken] = useRecoilState(accessTokenState)

    useEffect(() => {
        // const mylocalstorageAccessToken = localStorage.getItem('accessToken')
        // setAccessToken(mylocalstorageAccessToken || "")
        getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken)
        })
    },[])

    const errorLink = onError(({graphQLErrors, operation, forward}) => {
        // 1. 에러를 캐치
        if(graphQLErrors){
            for(const err of graphQLErrors){
                // 해당 에러가 토큰 만료 에러인지 체크(UNAUTHENTICATED)
                if(err.extensions.code === 'UNAUTHENTICATED'){
                    getAccessToken().then((newAccessToken) => {
                        setAccessToken(newAccessToken)
                    // 3. 재발급 받은 accessToken 으로 방금 실패한 쿼리 재요청
                        operation.setContext({
                            headers: {
                                ...operation.getContext().headers,
                                Authorization: `Bearer ${accessToken}`
                            }
                        });
                        //변경된 오퍼레이션 재요청
                        return forward(operation)  
                    })
                }
            }
        }
    })

    const uploadLink = createUploadLink({
        uri: "http://localhost:3001/graphql",
        headers: {Authorization: `Bearer ${accessToken}`},
        credentials: 'include',
    })

    const client = new ApolloClient({
        link: ApolloLink.from([errorLink, uploadLink]),
        cache: new InMemoryCache()
    })

    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}
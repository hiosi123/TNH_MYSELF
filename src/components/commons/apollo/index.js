import { accessTokenState } from "../../../commons/store"
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client'
import { useRecoilState } from 'recoil'
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";


export default function ApolloSetting(props) {
    const [accessToken,setAccessToken] = useRecoilState(accessTokenState)

    // if(typeof window !== "undefined") {
    //     console.log('여기는 브라우저다!')
    // } else{
    //     console.log("여기는 프론트엔드 서버다")
    // }

    useEffect(() => {
        const mylocalstorageAccessToken = localStorage.getItem('accessToken')
        setAccessToken(mylocalstorageAccessToken || "")
    },[])

    const uploadLink = createUploadLink({
        uri: "http://localhost:3001/graphql",
        headers: {Authorization: `Bearer ${accessToken}`},
        credentials: 'include',
    })

    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
        cache: new InMemoryCache()
    })

    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}
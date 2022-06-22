import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

function MyApp({Component, pageProps }) {
    //모든 셋팅
    const client = new ApolloClient({
        uri: "http://localhost:3001/graphql",
        cache: new InMemoryCache()
    })

    return (
        <ApolloProvider client={client}>
            <Component {...pageProps}/>
        </ApolloProvider>
    )
}

export default MyApp
import ApolloSetting from '../src/components/commons/apollo'
import { RecoilRoot } from "recoil";

function MyApp({Component, pageProps }) {
    //모든 셋팅

    return (
        <RecoilRoot>
            <ApolloSetting>
                <Component {...pageProps}/>
            </ApolloSetting>
        </RecoilRoot>
    )   
}

export default MyApp
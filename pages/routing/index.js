import {useRouter} from 'next/router'

export default function StaticRoutingPage(){
    const router = useRouter()

    const onClickMove1 = () => {
        router.push("/boards/32")
    }
    const onClickMove2 = () => {
        router.push("/boards/20")
    }
    const onClickMove3 = () => {
        router.push("/boards/19")
    }

    return (
        <div>
            <button onClick={onClickMove1}>32번 게시글</button>
            <button onClick={onClickMove2}>20번 게시글</button>
            <button onClick={onClickMove3}>19번 게시글</button>
        </div>

    )
}
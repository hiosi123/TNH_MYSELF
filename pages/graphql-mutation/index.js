// import axios from 'axios'
import { useState } from 'react'
import { useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
    mutation createBoard($title: String!, $content: String!, $url: String) {
        createBoard(title: $title, content: $content, url: $url){
            id
            title
            content
            viewcount
        }
    }
`

export default function GraphqlMutationPage(){
    const [data, setData] = useState("")
    const [mytitle, setTitle] = useState("")
    const [mycontent, setContent] = useState("")
    const [callAPI] = useMutation(CREATE_BOARD)

    


    const callGraphqlApi = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1")
        const result = await callAPI({
            variables: {title: mytitle, content: mycontent}
        })

        console.log(result)
        console.log(result.data.createBoard.content)
        setData(result.data.createBoard.content)
        // console.log(result.data.title)
        // setData(result.data.title)
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContent = (event) => {
        setContent(event.target.value)
    }    


    return (
        <div>
            {/* <div>{data}</div> */}
            제목: <input type='text' onChange={onChangeTitle}></input> <br/>
            내용: <input type='text' onChange={onChangeContent}></input> <br/>
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!!</button>

        </div>
    )
}
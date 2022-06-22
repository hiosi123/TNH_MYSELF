import { useQuery, gql } from '@apollo/client'

const FETCH_BOARD = gql`
    query fetchBoard($boardid: Float!){
        fetchBoard(boardid: $boardid){
            id
            title
            content
            url

        }
    }
`

export default function StaticRoutedPage(){
    const { data } = useQuery(FETCH_BOARD, {
        variables: {boardid: 32}
    }) 
    console.log(data)
    //optional chaining, 데이터가 있으면 보여줘
    return (
        <div>
            <div>{data?.fetchBoard.id}</div> 
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.content}</div>
        </div>

    )
}
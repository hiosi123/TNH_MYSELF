import { useMutation, gql, useQuery } from "@apollo/client"
import {useRouter} from 'next/router'
import styled from '@emotion/styled'
import {
  TableTop, 
  Wrapper,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  Row,
  ColumnBasic,
  Column,
  ColumnTitle,
  Button,
  Footer,
  TableBottom
} from '../../styles/emotion'
import { getDate } from "../../src/commons/libraries/utils"

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards{
      id
      title
      createdAt
      viewcount
    }
  }
`
const DELETE_BOARD = gql`
  mutation deleteBoard($boardid: Float!){
    deleteBoard(boardid: $boardid)
  }
`




export default function BoardLists() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD)
  const { data } = useQuery(FETCH_BOARDS)

  const onClickDelete = (event) => {
   deleteBoard({
      variables: {boardid: Number(event.target.id)},
      refetchQueries: [{query: FETCH_BOARDS}]
    })

  }

  const onClickMoveToBoardNew = () => {
    router.push('/boards/new')
  }

  const onClickMoveToBoardDetail = (event) => {
    router.push(`/boards/${event.target.id}`)
  }



  return(
    <Wrapper>
      <TableTop/>
      <Row>
        <ColumnHeaderBasic><input type="checkbox" /></ColumnHeaderBasic>
        <ColumnHeaderBasic>No</ColumnHeaderBasic>
        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
        <ColumnHeaderBasic>게시일</ColumnHeaderBasic>
        <ColumnHeaderBasic>조회수</ColumnHeaderBasic>
        <ColumnHeaderBasic>삭제</ColumnHeaderBasic>
      </Row>
      {data?.fetchBoards.map((el) => {


        
          return(
            <Row key={el.id}>
            <ColumnBasic><input type="checkbox" /></ColumnBasic>
            <ColumnBasic>{el.id}</ColumnBasic>
            <ColumnTitle id={el.id} onClick={onClickMoveToBoardDetail}>{el.title}</ColumnTitle>
            <ColumnBasic>{getDate(el.createdAt)}</ColumnBasic>
            <ColumnBasic>{el.viewcount}</ColumnBasic>
            <ColumnBasic>
                <button id={el.id} onClick={onClickDelete}>삭제</button>
            </ColumnBasic>
            </Row>
          )
        }
      )}    
      <TableBottom/>
      <Footer>
        <Button onClick={onClickMoveToBoardNew}>
          등록
        </Button>
      </Footer>
    </Wrapper>
  )
}
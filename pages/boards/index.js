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
  TableBottom,
  Page
} from '../../styles/emotion'
import { getDate } from "../../src/commons/libraries/utils"
import { useState } from "react"

const FETCH_BOARDS = gql`
  query fetchBoards ($page: Float){
    fetchBoards(page: $page){
      id
      title
      createdAt
      viewcount
      user {
        userid
      }
    }
  }
`
const DELETE_BOARD = gql`
  mutation deleteBoard($boardid: Float!){
    deleteBoard(boardid: $boardid)
  }
`

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;



export default function BoardLists() {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const {data, refetch} = useQuery(FETCH_BOARDS)
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT)
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  const [deleteBoard] = useMutation(DELETE_BOARD)
  


  const onClickDelete = async (event) => {
    try{
      await deleteBoard({
        variables: {boardid: Number(event.target.id)},
        refetchQueries: [{query: FETCH_BOARDS}]
      })
  
    } catch(error) {
      alert('삭제할 권한이 없습니다.')
    }
 
  }

  const onClickMoveToBoardNew = () => {
    router.push('/boards/new')
  }

  const onClickMoveToBoardDetail = (event) => {
    router.push(`/boards/${event.target.id}`)
  }
  
  const onClickPage = (event) => {
    refetch({page: Number(event.target.id)})
  }

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (!(startPage + 10 <= lastPage)) return;
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
  };



  
  return(
    <Wrapper>
      <TableTop/>
      <Row>
        <ColumnHeaderBasic><input type="checkbox" /></ColumnHeaderBasic>
        <ColumnHeaderBasic>No</ColumnHeaderBasic>
        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
        <ColumnHeaderBasic>게시자</ColumnHeaderBasic>
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
            <ColumnBasic>{el.user.userid}</ColumnBasic>
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
      <Page onClick={onClickPrevPage}>{`<`}</Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <Page
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
            >
              {` `} {index + startPage}
            </Page>
          )
      )}
      <Page onClick={onClickNextPage}>{`>`}</Page>  
        <Button onClick={onClickMoveToBoardNew}>
          등록
        </Button>
      </Footer>
    </Wrapper>
  )
}
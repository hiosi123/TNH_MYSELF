import { useMutation, gql, useQuery } from "@apollo/client"
import {useRouter} from 'next/router'
import styled from '@emotion/styled'
import {
  Title,
  TableTop, 
  Wrapper,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  Row,
  ColumnBasic,
  ColumnTitle,
  Button,
  Footer,
  TableBottom,
  Page
} from '../../styles/emotion'
import { getDate } from "../../src/commons/libraries/utils"
import { useState } from "react"

const FETCH_BOARDS = gql`
  query fetchBoards ($page: Float $search: String $userid: String){
    fetchBoards(page: $page, search: $search, userid: $userid){
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

const LOGOUT = gql`
mutation logout{
  logout
}
`
const DELETE_ALL =gql`
  mutation deleteBoards($boardid: [Int!]!){
    deleteBoards(boardid: $boardid)
  }
`



export default function BoardLists() {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [search, setSearch] = useState('')
  const [cateogory, setCategory] = useState('')

  const [isAllChecked, setIsAllChecked] = useState(false)
  const [checkedItems, setCheckedItems] = useState([])

 

  const {data, refetch} = useQuery(FETCH_BOARDS)
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT)
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  const [deleteBoard] = useMutation(DELETE_BOARD)
  const [deleteBoards] = useMutation(DELETE_ALL)
  const [logout] = useMutation(LOGOUT)
  


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

  const onClickLogout = async (event) => {
    try{
      await logout()
      router.push('/login')
    } catch(error) {
      console.log(error)
    }

  }
  const onChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  const onChangeType =  (event) => {
    setCategory(event.target.value)

  }
    
  const onClickSearch =  () => {
    if(cateogory === 'title'){
      refetch({search: search, page: 1})
    } else if(cateogory === 'user'){
      refetch({userid: search, page: 1})
    }
  
  }
 
  

  const onClickCheckBox = (event) => {
    console.log(event.target.id)
    const BNO = Number(event.target.id)

    if(checkedItems.includes(BNO)){
      setCheckedItems(checkedItems.filter((el) => el !== BNO))
    } else {
      setCheckedItems([...checkedItems, BNO])
    }
    console.log(checkedItems)
  }

  const onClickDeleteBoards = async () => {
      try{
        await deleteBoards({
          variables: {boardid: checkedItems},
          refetchQueries: [{query: FETCH_BOARDS}]
        })
        setIsAllChecked(!isAllChecked)
      } catch(error) {
        console.log(error)
        alert('삭제할 권한이 없습니다.')
      } 
  }

  const onClickCheckAllBox = () => {
    setIsAllChecked(!isAllChecked)
    if(!isAllChecked){
      const arr =data?.fetchBoards.map((e) => e.id)
      setCheckedItems([...checkedItems, ...arr])
    } else {
      setCheckedItems([])
    }
    console.log(checkedItems)
  }

  return(
    <Wrapper>
      <Title>게시글 페이지</Title> 
        <select type='text' onChange={onChangeType}>
          <option value='title'>title</option>
          <option value='user'>user</option>
        </select>
        <input type='text' onChange={onChangeSearch}/><button onClick={onClickSearch} style={{}}>검색하기</button>
      <TableTop/>
      <Row>
        <ColumnHeaderBasic><input id='allclick' checked={isAllChecked} type="checkbox" onChange={onClickCheckAllBox}/></ColumnHeaderBasic>
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
            <ColumnBasic><input type="checkbox" checked={checkedItems.includes(el.id) ? true : false} id={el.id} onChange={onClickCheckBox}/></ColumnBasic>
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
      </Footer>
      <Footer>
        <Button onClick={onClickMoveToBoardNew}>
          등록
        </Button>
        <Button onClick={onClickDeleteBoards}>
          삭제
        </Button>
        <Button onClick={onClickLogout}>
          로그아웃
        </Button>
      </Footer>
    </Wrapper>
  )
}
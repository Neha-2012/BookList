import { useEffect, useState } from "react";
import BookInfo from "../BookInfo";
import ToReadBookList from "../ToReadBookList/ToReadBookList"
import ReadBookList from "../ReadBookList/ReadBookList"
import './Home.css'
function Home() {
  
  const [bookList, setBookList]=useState([])
  const [toReadList, setToReadList] = useState([])
  const [readList,setReadList]=useState([])
   useEffect(()=>{
    fetch('https://gutendex.com/books/')
    .then(response => response.json())
    .then(data => setBookList(data.results))
    .catch(error => console.error(error))
  }
  
  ,[])
  const addToReadListHandler = (bookObj)=>{
    if(!toReadList.some(book => book.id === bookObj.id))
    setToReadList([ 
    ...toReadList,
    bookObj
  ])
}

  const addToCompleteList = (bookObj)=>{
    if(!readList.some(book => book.id === bookObj.id)){

      
      setToReadList([ 
        ...toReadList,
        bookObj
      ])
      setReadList( [ // with a new array
      ...readList, // that contains all the old items
      bookObj
       // and one new item at the end
    ])
    }
  
}

  const addToBookList = (bookObj)=>{
    if(!bookList.some(book => book.id === bookObj.id))
    setBookList([ 
      ...bookList,
      bookObj
    ])}
 

  return (
    <>
      <h1>Book-List</h1>

      <div className="bookContainer">
       {bookList.map(x=>
        <BookInfo key = {x.id} bookInfo={x} addToReadListHandler={addToReadListHandler}></BookInfo>
        )}
      </div>
      <h1>To Read List</h1>
      <div className="bookContainer">
       {toReadList.map(x=>
        <ToReadBookList key = {x.id} bookInfo={x} addToCompleteList = {addToCompleteList}></ToReadBookList>
        )}
      </div>
      <h1>Read List</h1>
      <div className="bookContainer">
       {readList.map(x=>
        <ReadBookList key = {x.id} bookInfo={x} addToBookList={addToBookList} addToReadListHandler={addToReadListHandler}></ReadBookList>
        )}
      </div>
    </>
  );
}

export default Home;

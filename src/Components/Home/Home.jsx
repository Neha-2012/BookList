import { useEffect, useState } from "react";
import BookInfo from "../BookInfo";
import './Home.css'
function Home() {
  
  const [bookList, setBookList]=useState([])
 

   useEffect(()=>{
    fetch('https://gutendex.com/books/')
    .then(response => response.json())
    .then(data => setBookList(data.results))
    .catch(error => console.error(error))
  }
  
  ,[])
  return (
    <>
      <h1>Book-List</h1>
      <div className="bookContainer">
       {bookList.map(x=>
        <BookInfo key = {x.id} bookInfo={x}></BookInfo>
        )}
      </div>
     

    </>
  );
}

export default Home;

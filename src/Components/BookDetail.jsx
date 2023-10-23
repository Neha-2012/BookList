import Button from "@mui/material/Button";
import  "./BookDetail.css"
import { useLocation } from 'react-router-dom'

const BookDetail = () => {
  const location = useLocation()
  const { book } = location.state
  return (
    <div className="bookDetailcontainer">
     <div className="bookImage" >
      <img
        src={book.formats["image/jpeg"]}
        className="book-img"
      ></img>
      <Button variant="contained">Want to Read</Button>
      <Button variant="contained">Price </Button>
    </div>
    <div className="bookInfo">
        <h1>{book.title}</h1>
        {book.authors.map(author => <p key={author.name}>{author.name}</p>)}
        <p></p>
    </div>
    </div>
   
  );
};
export default BookDetail;

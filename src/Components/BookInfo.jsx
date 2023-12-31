import { Link } from "react-router-dom";
import "./BookInfo.css";
import { Button } from "@mui/material";

function BookInfo(props) {
  
  return (
    <div className="book">
      <Link to="/BookDetail" state={{ book: props.bookInfo }}>
        <h4>{props.bookInfo.title}</h4>
        <img src={props.bookInfo.formats["image/jpeg"]} className="book-img"></img>
      </Link>
      <Button onClick={()=>props.addToReadListHandler(props.bookInfo)}className="addtoreadButton"variant="contained" size="small">Add to Read list</Button>
    </div>
  );
}
export default BookInfo;

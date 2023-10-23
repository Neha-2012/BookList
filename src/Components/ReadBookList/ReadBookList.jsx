import { Link } from "react-router-dom";
import "./ReadBookList.css";
import { Button } from "@mui/material";

function ToReadBookList(props) {
  
  return (
    <div className="readBookListContainer">
      <Link to="/BookDetail" state={{ book: props.bookInfo }}>
        <h4>{props.bookInfo.title}</h4>
        <img src={props.bookInfo.formats["image/jpeg"]} className="book-img"></img>
      </Link>
      <Button onClick={()=>props.addToBookList(props.bookInfo)}className="addtoreadButton"variant="contained" size="small">Move to Book List</Button>
      <Button onClick={()=>props.addToReadListHandler(props.bookInfo)}className="addtoreadButton"variant="contained" size="small">Move to ToRead List</Button>
    </div>
  );
}
export default ToReadBookList;

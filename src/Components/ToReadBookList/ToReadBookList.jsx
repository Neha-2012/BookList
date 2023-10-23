import { Link } from "react-router-dom";
import "./ToReadBookList.css";
import { Button } from "@mui/material";

function ToReadBookList(props) {
  
  return (
    <div className="book">
      <Link to="/BookDetail" state={{ book: props.bookInfo }}>
        <h4>{props.bookInfo.title}</h4>
        <img src={props.bookInfo.formats["image/jpeg"]} className="book-img"></img>
      </Link>
      <Button onClick={()=>props.addToCompleteList(props.bookInfo)}className="addtoreadButton"variant="contained" size="small">Complete</Button>
    </div>
  );
}
export default ToReadBookList;

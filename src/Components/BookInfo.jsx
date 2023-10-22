import { Link } from "react-router-dom";
import "./BookInfo.css";

function BookInfo(props) {
  
  return (
    <div className="book">
      <Link to="/BookDetail" state={{ book: props.bookInfo }}>
        <h4>{props.bookInfo.title}</h4>
        <img src={props.bookInfo.formats["image/jpeg"]} className="book-img"></img>
      </Link>
    </div>
  );
}
export default BookInfo;

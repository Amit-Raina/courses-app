import { Fragment } from "react";
import "./ContentTile.css"

const ContentTile = (props) => {
  return (
    <Fragment>
      <tr className = "content-detail" onClick={props.currentSelected} style={{backgroundColor: props.checked ? "rgb(193,242,145)" : ""}}>
        <td className="course-title" style={{color: "rgb(2,131,223)"}}>
          {props.title}
        </td>
        <td>{props.length}</td>
        <td>{props.category}</td>
        <td>{props.author}</td>
      </tr>
    </Fragment>
  );
};

export default ContentTile;

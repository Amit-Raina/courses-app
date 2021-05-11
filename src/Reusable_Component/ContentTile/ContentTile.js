import { Fragment } from "react";
import "./ContentTile.css"

const ContentTile = () => {
  return (
    <Fragment>
      <tr className = "content-detail">
        <td className="course-title">
          Clean Code: Writing Code for Humans
        </td>
        <td>3:10</td>
        <td>Software Practices</td>
        <td>cory-house</td>
      </tr>
    </Fragment>
  );
};

export default ContentTile;

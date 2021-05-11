import { Component, Fragment } from "react";
import "./CoursesScreen.css";
import Header from "../../Reusable_Component/Header/Header";
import ContentTile from "../../Reusable_Component/ContentTile/ContentTile";

class CoursesScreen extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="content-body">
          <div className="title">
            <h1>Courses</h1>
          </div>
          <div className="options-bar">
            <div className="options-bar-new">
              <i class="fa fa-plus" aria-hidden="true"></i> New
            </div>
            &nbsp;&nbsp;
            <div className="options-bar-edit">
              <i class="fa fa-pencil" aria-hidden="true"></i> Edit
            </div>
            &nbsp;&nbsp;
            <div className="options-bar-delete">
              <i class="fa fa-trash-o" aria-hidden="true"></i> Delete
            </div>
          </div>
          <div className="course-details">
            <div className="inner-padding">
            <table className="table-header">
              <tr>
                <th>
                  Title <i class="fa fa-sort" aria-hidden="true"></i>
                </th>
                <th>
                  Length <i class="fa fa-sort" aria-hidden="true"></i>
                </th>
                <th>
                  Category <i class="fa fa-sort" aria-hidden="true"></i>
                </th>
                <th>
                  Author <i class="fa fa-sort" aria-hidden="true"></i>
                </th>
              </tr>
              <ContentTile/>
              <ContentTile/>
              <ContentTile/>
              <ContentTile/>
            
            </table>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CoursesScreen;

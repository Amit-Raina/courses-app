import { Component, Fragment } from "react";
import "./CoursesScreen.css";
import Header from "../../Reusable_Component/Header/Header";
import ContentTile from "../../Reusable_Component/ContentTile/ContentTile";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCourseId } from "../../Actions";

class CoursesScreen extends Component {
  state = {
    currentlyOn: null,
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="content-body">
          <div className="title">
            <h1>Courses</h1>
          </div>
          <div className="options-bar">
            <NavLink to="/add-course" style={{ textDecoration: "none" }}>
              <div className="options-bar-new">
                <i className="fa fa-plus" aria-hidden="true"></i> New
              </div>
            </NavLink>
            &nbsp;&nbsp;
            <NavLink to={this.state.currentlyOn === null ? "" :"/edit-course"} style={{ textDecoration: "none" }}>
              <div className="options-bar-edit">
                <i className="fa fa-pencil" aria-hidden="true"></i> Edit
              </div>
            </NavLink>
            &nbsp;&nbsp;
            <div className="options-bar-delete">
              <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
            </div>
          </div>
          <div className="course-details">
            <table className="table-structure" cellSpacing="0">
              <thead>
                <tr className="table-header">
                  <th>
                    Title <i className="fa fa-sort" aria-hidden="true"></i>
                  </th>
                  <th>
                    Length <i className="fa fa-sort" aria-hidden="true"></i>
                  </th>
                  <th>
                    Category <i className="fa fa-sort" aria-hidden="true"></i>
                  </th>
                  <th>
                    Author <i className="fa fa-sort" aria-hidden="true"></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.props.CourseDetails.map((data, index) => {
                  return (
                    <ContentTile
                      id={data.id}
                      key={data.id}
                      title={data.title}
                      length={data.length}
                      category={data.category}
                      author={data.author}
                      checked={this.state.currentlyOn === data.id}
                      currentSelected={() => {
                        if(this.state.currentlyOn === data.id){
                        this.setState({currentlyOn:null});
                        setTimeout(()=>{this.props.getCourseId(this.state.currentlyOn)},500)
                        
                        }
                        else{
                        this.setState({ currentlyOn: data.id });
                        setTimeout(()=>{this.props.getCourseId(this.state.currentlyOn)},500)
                        }
                      }}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    CourseDetails: state.CourseDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCourseId: (courseId) => {
      dispatch(getCourseId(courseId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesScreen);

import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addCourse } from "../../Actions";
import Header from "../../Reusable_Component/Header/Header";
import "../AddCourse/AddCourse.css";

class EditCourse extends Component {
  state = {
    title: this.props.CourseDetails[this.props.selectedId - 1 ].title,
    author: this.props.CourseDetails[this.props.selectedId - 1 ].author,
    category:this.props.CourseDetails[this.props.selectedId - 1 ].category,
    length:this.props.CourseDetails[this.props.selectedId - 1 ].length,
  };

  getTitle = (value) => {
    this.setState({
      title: value,
    });
    
  };

  getAuthor = (value) => {
    this.setState({
      author: value,
    });
  };

  getCategory = (value) => {
    this.setState({
      category: value,
    });
  };

  getlength = (value) => {
    this.setState({
      length: value,
    });
  };

  clearValues= () =>{
      this.setState({
        isEmpty: true,
        title: "",
        author: "",
        category: "",
        length: "",
      })
  }

  checkValidity = () => {
    if (this.state.title.length === 0) {
      alert("Enter Title");
      return false;
    }
    if (this.state.author.length === 0) {
      alert("Enter Author");
      return false;
    }
    if (this.state.category.length === 0) {
      alert("Enter Category");
      return false;
    }
    if (this.state.length.length === 0) {
      alert("Enter Length");
      return false;
    }

    return true;
  };

  submitValues = () =>{
    if (this.checkValidity()) {
      this.props.addCourse({
        id: this.props.CourseDetails.length + 1,
        title: this.state.title,
        length: this.state.length,
        category: this.state.category,
        author: this.state.author,
      });
      
    
    }

  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="content-body-add-course">
          <div className="add-title">
            <h1>Edit</h1>
          </div>
          <div className="fields">
            <p>Title</p>
            <input
              type="text"
              value={this.state.title}
              placeholder="Title of the course"
              onChange={(event) => {
                this.getTitle(event.target.value);
              }}
            />

            <p>Author</p>
            <select
              name="author"
              
              defaultValue={this.state.author}
              onChange={(event) => {
                this.getAuthor(event.target.value);
              }}
            >
              <option value=""></option>
              <option value="cory-house" >Cory House</option>
              <option value="scott-allen">Scott Allen</option>
              <option value="dan-wahlin">Dan Wahlin</option>
            </select>

            <p>Category</p>
            <input
              type="text"
              value={this.state.category}
              placeholder="Category of the course"
              onChange={(event) => {
                this.getCategory(event.target.value);
              }}
            />

            <p>Length</p>
            <input
              type="text"
              value={this.state.length}
              placeholder="Length of course in minutes or hours"
              onChange={(event) => {
                this.getlength(event.target.value);
              }}
            />
          </div>
          <br></br>
          <div className="buttons">
            <span className="button-submit" onClick={this.submitValues}>
              <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Submit
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="button-cancel">Cancel</span>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CourseDetails: state.CourseDetails,
    selectedId : state.selectedToUpdate
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCourse: (courseData) => {
      dispatch(addCourse(courseData));
    },
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(EditCourse);

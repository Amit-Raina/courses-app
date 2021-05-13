import { ADDNEWCOURSE, EDITCOURSE, SELECTEDID } from "../Constants";

const initialState = {
  CourseDetails: [
    {
      id: 1,
      title: "Building Applications in React and Flux",
      length: "5:08",
      category: "JavaScript",
      author: "cory-house",
    },
    {
      id: 2,
      title: "Clean Code: Writing Code for Humans",
      length: "3:10",
      category: "Software Practices",
      author: "cory-house",
    },
    {
      id: 3,
      title: "Architecting Applications for the Real World",
      length: "2:52",
      category: "Software Architecture",
      author: "cory-house",
    },
    {
      id: 4,
      title: "Becoming an Outlier: Reprogramming the Developer Mind",
      length: "2:30",
      category: "Career",
      author: "cory-house",
    },
    {
      id: 5,
      title: "Web Component Fundamentals",
      length: "5:10",
      category: "HTML5",
      author: "cory-house",
    },
  ],
  selectedToUpdate: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDNEWCOURSE:
      return {
        ...state,
        CourseDetails: [...state.CourseDetails, action.payload],
        selectedToUpdate:null
      };
    case SELECTEDID:
      return { ...state, selectedToUpdate: action.payload };
    case EDITCOURSE:
      const newCourseDetails = state.CourseDetails.map((data) => {
        if (data.id === action.id) return action.payload;
        return data;
      });
      return { ...state, CourseDetails: newCourseDetails , selectedToUpdate:null};
    default:
      return state;
  }
};
export default rootReducer;

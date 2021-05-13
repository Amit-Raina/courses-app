import { ADDNEWCOURSE, SELECTEDID, EDITCOURSE } from "../Constants";

export const addCourse = (courseData) => {
  return {
    type: ADDNEWCOURSE,
    payload: courseData,
  };
};
export const getCourseId = (id) => {
  return {
    type: SELECTEDID,
    payload: id,
  };
};

export const editCourse = (courseData, id) => {
  return {
    type: EDITCOURSE,
    payload: courseData,
    id: id,
  };
};

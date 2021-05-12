import { ADDNEWCOURSE, SELECTEDID } from "../Constants";


   export const addCourse = (courseData) => {
        return {
            type:ADDNEWCOURSE,
            payload:courseData
        }
    }
    export const getCourseId = (id) => {
        return {
            type:SELECTEDID,
            payload:id
        }
    }

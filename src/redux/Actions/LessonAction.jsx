import {
  GET_LESSON,
  GET_DETAIL_LESSON,
  DELETE_LESSON,
  CREATE_LESSON,
} from "./../Constans/LessonConstanst";
import axios from "axios";
const DataLesson = (type, data) => {
  return {
    type: type,
    data: data,
  };
};
export const getLessonFromService = () => {
  return (dispatch) => {
    axios
      .get("http://api.study.localhost/v1.0/lessons?populate=course")
      .then((lessons) => {
        return dispatch(DataLesson(GET_LESSON, lessons.data.data));
      })
      .catch((error) => console.log(error));
  };
};

export const getDetailLessonFromSerivice = (idLesson) => {
  return (dispatch) => {
    axios
      .get(
        `http://api.study.localhost/v1.0/lessons/${idLesson}?populate=course`
      )
      .then((lesson) =>
        dispatch(DataLesson(GET_DETAIL_LESSON, lesson.data.data))
      )
      .catch((error) => console.log(error));
  };
};
export const deleteLessonById = (idLesson) => {
  return (dispatch) => {
    axios
      .delete(`http://api.study.localhost/v1.0/lessons/${idLesson}`)
      .then((lesson) =>
        dispatch(DataLesson(DELETE_LESSON, lesson.data.data._id))
      )
      .catch((error) => console.log(error));
  };
};

export const CreateLesson = (lesson) => {
  console.log(lesson);
  return (dispatch) => {
    axios
      .post(`http://api.study.localhost/v1.0/lessons`, lesson)
      .then((lesson) => {
        console.log(lesson.data);
        return dispatch(DataLesson(CREATE_LESSON, lesson.data.data));
      })
      .catch((error) => console.log(error));
  };
};

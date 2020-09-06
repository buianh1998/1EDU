import {
  GET_LESSON,
  GET_DETAIL_LESSON,
  DELETE_LESSON,
  CREATE_LESSON,
} from "../Constans/LessonConstanst";

const stateLesson = {
  lessonList: {
    limit: 0,
    offset: 0,
    total: 0,
    items: [],
  },
  lessonDetail: {
    id: "",
    name: "",
    description: "",
    imageUrl: "",
    course: "",
    createdAt: Date,
    updatedAt: Date,
  },
};
export const LessonReducer = (state = stateLesson, action) => {
  switch (action.type) {
    case GET_LESSON:
      {
        state.lessonList = action.data;
      }
      return { ...state };
    case GET_DETAIL_LESSON:
      {
        state.lessonDetail = action.data;
      }
      return { ...state };
    case DELETE_LESSON:
      {
        let lessonData = { ...state.lessonList };
        let lessonList = lessonData.items.filter(
          (lesson) => lesson._id !== action.data
        );
        lessonData.total--;
        lessonData.items = lessonList;
        state.lessonList = lessonData;
      }
      return { ...state };
    case CREATE_LESSON:
      {
        let dataLesson = { ...state.lessonList };
        dataLesson.items.unshift(action.data);
        dataLesson.total++;
        state.lessonList = dataLesson;
      }
      return { ...state };

    default:
      return { ...state };
  }
};

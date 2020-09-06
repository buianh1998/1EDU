import {
  GET_SUBJECT,
  GET_DETAIL_SUBJECT,
  DELETE_SUBJECT,
  CREATE_SUBJECT,
  UPDATE_SUBJECT,
} from "./../Constans/SubjectConstans";
const subjectState = {
  dataSubject: {
    limit: 0,
    total: 0,
    offset: 0,
    items: [],
  },
  detailSubject: {
    id: "",
    name: "",
    description: "",
    imageUrl: "",
    createdAt: Date,
    updatedAt: Date,
  },
};
export const SubjectReducer = (state = subjectState, action) => {
  switch (action.type) {
    case GET_SUBJECT: {
      state.dataSubject = action.data;
    }
    case GET_DETAIL_SUBJECT:
      {
        state.detailSubject = action.data;
      }
      return { ...state };
    case DELETE_SUBJECT:
      {
        let dataSubject = { ...state.dataSubject };
        let listSubject = dataSubject.items.filter(
          (subject) => subject._id !== action.data
        );
        dataSubject.total--;
        dataSubject.items = listSubject;
        state.dataSubject = dataSubject;
      }
      return { ...state };
    case CREATE_SUBJECT:
      {
        let dataSubject = { ...state.dataSubject };
        dataSubject.total++;
        dataSubject.items.unshift(action.data);
        state.dataSubject = dataSubject;
      }
      return { ...state };
    case UPDATE_SUBJECT:
      {
        let dataSubject = { ...state.dataSubject };
        const index = dataSubject.items.findIndex(
          (subject) => subject._id === action.data._id
        );
        dataSubject.items[index] = action.data;
        state.dataSubject = dataSubject;
      }
      return { ...state };
    default:
      return { ...state };
  }
};

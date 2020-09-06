import axios from "axios";
import {
  GET_SUBJECT,
  GET_DETAIL_SUBJECT,
  DELETE_SUBJECT,
  CREATE_SUBJECT,
  UPDATE_SUBJECT,
} from "../Constans/SubjectConstans";
const ActionSubject = (type, data) => {
  return { type: type, data: data };
};

export const GetSubject = () => {
  return (dispatch) => {
    axios
      .get("http://api.study.localhost/v1.0/subjects")
      .then((subjects) =>
        dispatch(ActionSubject(GET_SUBJECT, subjects.data.data))
      )
      .catch((error) => console.log(error));
  };
};

export const GetDetailSubject = (idSubject) => {
  return (dispatch) => {
    axios
      .get(`http://api.study.localhost/v1.0/subjects/${idSubject}`)
      .then((subject) => {
        console.log(subject.data.data);
        return dispatch(ActionSubject(GET_DETAIL_SUBJECT, subject.data.data));
      })
      .catch((error) => console.log(error));
  };
};

export const DeleleSubject = (idSubject) => {
  return (dispatch) => {
    axios
      .delete(`http://api.study.localhost/v1.0/subjects/${idSubject}`)
      .then((subject) =>
        dispatch(ActionSubject(DELETE_SUBJECT, subject.data.data._id))
      )
      .catch((error) => console.log(error));
  };
};

export const CreateSubject = (subject) => {
  return (dispatch) => {
    axios
      .post("http://api.study.localhost/v1.0/subjects", subject)
      .then((subject) =>
        dispatch(ActionSubject(CREATE_SUBJECT, subject.data.data))
      )
      .catch((error) => console.log(error));
  };
};

export const UpdateSubject = (subject) => {
  let newSubject = {
    name: subject.name,
    imageUrl: subject.imageUrl,
    description: subject.description,
  };
  return (dispatch) => {
    axios
      .put(`http://api.study.localhost/v1.0/subjects/${subject.id}`, newSubject)
      .then((subject) =>
        dispatch(ActionSubject(UPDATE_SUBJECT, subject.data.data))
      )
      .catch((error) => console.log(error));
  };
};

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getLessonFromService,
  getDetailLessonFromSerivice,
  deleteLessonById,
} from "./../../redux/Actions/LessonAction";
class LessonList extends Component {
  componentDidMount() {
    const { getLesson } = this.props;
    getLesson();
  }
  renderLessonListToLayout = () => {
    const { lessonList, getDetailLesson, deleteLesson } = this.props;
    return lessonList.items.map((lesson, index) => {
      return (
        <tr key={index}>
          <th>
            {/* {lesson._id.length > 10 ? lesson._id.substr(0, 10) : lesson._id} */}
          </th>
          <th>{lesson.name}</th>
          <th>
            {lesson.imageUrl.length > 10
              ? lesson.imageUrl.substr(0, 9)
              : lesson.imageUrl}
          </th>
          <th>{lesson.course._id}</th>
          <th>{lesson.description}</th>
          <th>
            <button
              type="button"
              className="btn btn-success"
              data-toggle="modal"
              data-target="#modelId"
              onClick={() => {
                getDetailLesson(lesson._id);
              }}
            >
              Detail
            </button>
            <button type="button" className="btn btn-primary">
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                deleteLesson(lesson._id);
              }}
            >
              Delete
            </button>
          </th>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="card text-left">
        <div className="card-header bg-dark">
          <h3 className="text-center text-white">Lesson List</h3>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>ImageUrl</td>
                <td>Course</td>
                <td>Description</td>
                <td></td>
              </tr>
            </thead>
            <tbody>{this.renderLessonListToLayout()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
const getStateToProps = (state) => {
  const { lessonList } = state.LessonReducer;
  return { lessonList };
};
const getDispatchToProps = (dispatch) => {
  return {
    getLesson: () => {
      dispatch(getLessonFromService());
    },
    getDetailLesson: (idLesson) => {
      dispatch(getDetailLessonFromSerivice(idLesson));
    },
    deleteLesson: (idLesson) => {
      console.log(idLesson);
      dispatch(deleteLessonById(idLesson));
    },
  };
};
export default connect(getStateToProps, getDispatchToProps)(LessonList);

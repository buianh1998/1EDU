import React, { Component } from "react";
import { connect } from "react-redux";
import {
  GetSubject,
  GetDetailSubject,
  DeleleSubject,
} from "./../../redux/Actions/SubjectAction";
class SubjectList extends Component {
  renderSubjectListToLayout = () => {
    const { dataSubject, getDetailSubject, deleteSubject } = this.props;
    return dataSubject.items.map((subject, index) => {
      return (
        <tr key={index}>
          <td>{subject._id}</td>
          <td>{subject.name}</td>
          <td>{subject.imageUrl}</td>
          <td>{subject.description}</td>
          <td>
            <button
              type="button"
              className="btn btn-success"
              data-toggle="modal"
              data-target="#modelId"
              onClick={() => {
                getDetailSubject(subject._id);
              }}
            >
              VIEW
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#update-subject"
              onClick={() => {
                getDetailSubject(subject._id);
              }}
            >
              EDIT
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                deleteSubject(subject._id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  componentDidMount() {
    const { getSubject } = this.props;
    getSubject();
  }
  render() {
    return (
      <div className="card text-left">
        <div className="card-header bg-dark">
          <h3 className="text-white text-center">Form Subject</h3>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Image</td>
                <td>Description</td>
                <td></td>
              </tr>
            </thead>
            <tbody>{this.renderSubjectListToLayout()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { dataSubject } = state.SubjectReducer;
  return { dataSubject };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getSubject: () => {
      dispatch(GetSubject());
    },
    getDetailSubject: (idSubject) => {
      dispatch(GetDetailSubject(idSubject));
    },
    deleteSubject: (idSubject) => {
      dispatch(DeleleSubject(idSubject));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SubjectList);

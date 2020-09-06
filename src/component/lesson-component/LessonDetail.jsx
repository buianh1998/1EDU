import React, { Component } from "react";
import { connect } from "react-redux";
class LessonDetail extends Component {
  render() {
    const { lessonDetail } = this.props;
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ minWidth: 800 }} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> Lesson Detail</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-4">
                  <h3 className="text-center">Image Lesson</h3>
                  <img
                    src="https://lh3.googleusercontent.com/proxy/IHjJoFcKp8Bng3a-_sBfh_9ib2erp17F4yxL_6rlqUTOOVktQK-M9TW4LA2SHRv73waQbtPVH2-c_2ROXabS_6SiXdKila1h9fVD_jhRYgJBMZqOsa1T_bNP"
                    alt=""
                    style={{ height: 300 }}
                  />
                </div>
                <div className="col-8">
                  <div style={{ marginLeft: 40 }}>
                    <h3 className="text-center">Detail Lesson</h3>

                    <table className="table">
                      <thead>
                        <tr>
                          <td>Id</td>
                          <td>{lessonDetail.id}</td>
                        </tr>
                        <tr>
                          <td>Name</td>
                          <td>{lessonDetail.name}</td>
                        </tr>
                        <tr>
                          <td>Course</td>
                          <td>{lessonDetail.course.name}</td>
                        </tr>
                        <tr>
                          <td>Description</td>
                          <td>{lessonDetail.description}</td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Edit Lesson
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { lessonDetail } = state.LessonReducer;
  return { lessonDetail };
};
export default connect(mapStateToProps, null)(LessonDetail);

import React, { Component } from "react";
import { connect } from "react-redux";
class SubjectDetail extends Component {
  componentDidMount() {
    const { detailSubject } = this.props;
  }
  render() {
    const { detailSubject } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            role="document"
            style={{ minWidth: 800 }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-center">Detail Subject</h5>
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
                    <h3 className="text-center">Image Subject</h3>
                    <img
                      src="https://bizweb.dktcdn.net/100/053/298/files/ky-thi-tieng-nhat-1.jpg?v=1457758575167"
                      alt=""
                      style={{ height: 280 }}
                    />
                  </div>
                  <div className="col-8">
                    <h3 className="text-center">Detail Subject</h3>
                    <div style={{ marginLeft: 80 }}>
                      <table className="table">
                        <thead>
                          <tr>
                            <td>Id:</td>
                            <td>{detailSubject.id}</td>
                          </tr>
                          <tr>
                            <td>Name:</td>
                            <td>{detailSubject.name}</td>
                          </tr>
                          <tr>
                            <td>Description:</td>
                            <td>{detailSubject.description}</td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Edit Subject
                </button>
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    );
  }
}

const mapSateToProps = (state) => {
  const { detailSubject } = state.SubjectReducer;
  return { detailSubject };
};

export default connect(mapSateToProps, null)(SubjectDetail);

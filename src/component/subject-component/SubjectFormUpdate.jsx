import React, { Component } from "react";
import { connect } from "react-redux";
import { UpdateSubject } from "../../redux/Actions/SubjectAction";
class SubjectFormUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: {
        name: "",
        imageUrl: "",
        description: "",
      },
      error: {
        name: "",
        imageUrl: "",
        description: "",
      },
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      success: newProps.detailSubject,
    });
  }

  handelSubmit = (e) => {
    e.preventDefault();
    const { updateSubject } = this.props;
    updateSubject(this.state.success);
  };
  handelChange = (e) => {
    let getInput = e.target;
    let { value, name, pattern } = getInput;
    let mgsError = "";
    if (name === "name" || name === "description" || name === "imageUrl") {
      let regex = new RegExp(pattern);
      if (!regex.test(value)) {
        mgsError = `${name} must be at least 3 characters and most 30 characters`;
      }
    }
    if (value.trim() === "") {
      mgsError = `${name} is not null`;
    }

    let success = { ...this.state.success, [name]: value };
    let error = { ...this.state.error, [name]: mgsError };
    this.setState({
      success: success,
      error: error,
    });
  };
  render() {
    const { success, error } = this.state;
    return (
      <div
        className="modal fade"
        id="update-subject"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ minWidth: 850 }} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center">Edit Subject</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body text-left">
              <form onSubmit={this.handelSubmit}>
                <div className="row">
                  <div className="col-6 form-group">
                    <label htmlFor="">Name: </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={success.name}
                      onChange={this.handelChange}
                      pattern=".{3,30}"
                    />
                    <p className="text-danger">{error.name}</p>
                  </div>
                  <div className="col-6 form-group">
                    <label htmlFor="">ImageUrl: </label>
                    <input
                      type="text"
                      className="form-control"
                      name="imageUrl"
                      value={success.imageUrl}
                      onChange={this.handelChange}
                      pattern=".{3,30}"
                    />
                    <p className="text-danger">{error.imageUrl}</p>
                  </div>
                  <div className="col-12 form-group">
                    <label htmlFor="">Description: </label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="description"
                      value={success.description}
                      onChange={this.handelChange}
                      pattern=".{3,30}"
                    ></textarea>
                    <p className="text-danger">{error.description}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary float-right"
                    >
                      Save Subject
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { detailSubject } = state.SubjectReducer;
  return { detailSubject };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateSubject: (subject) => {
      dispatch(UpdateSubject(subject));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SubjectFormUpdate);

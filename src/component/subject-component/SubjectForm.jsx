import React, { Component } from "react";
import { connect } from "react-redux";
import { CreateSubject } from "../../redux/Actions/SubjectAction";
class SubjectForm extends Component {
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
  handlerChangle = (e) => {
    let getInput = e.target;
    let { name, value, pattern } = getInput;
    let mgsError = "";
    if (name == "name" || name == "imageUrl" || name == "description") {
      let regexName = new RegExp(pattern);
      if (!regexName.test(value)) {
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
  handelSubmit = (e) => {
    e.preventDefault();
    const { createSubject } = this.props;
    createSubject(this.state.success);
    this.setState({
      success: {
        name: "",
        imageUrl: "",
        description: "",
      },
    });
  };
  renderButtonSubmit = () => {
    const { success, error } = this.state;
    let isActive = true;
    for (const key in success) {
      if (success[key] === "" || error[key] !== "") isActive = false;
    }
    if (isActive) {
      return (
        <button
          type="submit"
          className="btn btn-primary"
          style={{ float: "right" }}
        >
          Save Subject
        </button>
      );
    } else {
      return (
        <button
          type="submit"
          className="btn btn-primary"
          style={{ float: "right" }}
          disabled
        >
          Save Subject
        </button>
      );
    }
  };
  render() {
    const { success, error } = this.state;
    return (
      <div>
        <div className="card text-left">
          <div className="card-header bg-dark">
            <h3 className="text-white text-center">Form Subject</h3>
          </div>
          <div className="card-body ">
            <form action="" onSubmit={this.handelSubmit}>
              <div className="row">
                <div className="col-6 form-group">
                  <label htmlFor="">Name Subject:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={success.name}
                    onChange={this.handlerChangle}
                    pattern=".{3,30}"
                  />
                  <p className="text-danger">{error.name}</p>
                </div>
                <div className="col-6">
                  <label htmlFor="">Image Subject:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="imageUrl"
                    value={success.imageUrl}
                    onChange={this.handlerChangle}
                    pattern=".{3,30}"
                  />
                  <p className="text-danger">{error.imageUrl}</p>
                </div>
                <div className="col-12">
                  <label htmlFor="">Description Subject:</label>
                  <textarea
                    className="form-control"
                    type="text"
                    name="description"
                    value={success.description}
                    onChange={this.handlerChangle}
                    pattern=".{3,30}"
                  ></textarea>
                  <p className="text-danger">{error.description}</p>
                </div>
              </div>
              <div className="row mt-3">{this.renderButtonSubmit()}</div>
            </form>
          </div>
        </div>
        ;
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createSubject: (subject) => {
      dispatch(CreateSubject(subject));
    },
  };
};

export default connect(null, mapDispatchToProps)(SubjectForm);

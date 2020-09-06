import React, { Component } from "react";
import { CreateLesson } from "../../redux/Actions/LessonAction";
import { connect } from "react-redux";
class LessonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: {
        name: "",
        description: "",
        imageUrl: "",
        course: "",
      },
      error: {
        name: "",
        description: "",
        imageUrl: "",
        course: "",
      },
    };
  }
  handelChange = (e) => {
    let getInput = e.target;
    let { value, name, pattern } = getInput;

    let mgsError = "";

    if (
      name == "description" ||
      name == "name" ||
      name == "imageUrl" ||
      name == "course"
    ) {
      let regex = new RegExp(pattern);
      if (!regex.test(value)) {
        mgsError = `${name} must be at least 3 characters and most 30 characters`;
      }
    }
    if (value.trim() === "") {
      mgsError = `${name} must not be empty`;
    }
    let error = { ...this.state.error, [name]: mgsError };
    let success = { ...this.state.success, [name]: value };
    this.setState({
      success: success,
      error: error,
    });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    const { createLesson } = this.props;
    createLesson(this.state.success);
    this.setState({
      success: {
        name: "",
        imageUrl: "",
        description: "",
        course: "",
      },
    });
  };
  render() {
    const { success, error } = this.state;
    return (
      <div>
        <div className="card text-left">
          <div className="card-header bg-dark">
            <h3 className="text-white text-center">Lesson Form</h3>
          </div>

          <div className="card-body ">
            <form onSubmit={this.handelSubmit}>
              <div className="row">
                <div className="col-4 form-group">
                  <label htmlFor="">Name Lesson:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={success.name}
                    onChange={this.handelChange}
                    pattern=".{3,30}"
                  />
                  <p className="text-danger">{error.name}</p>
                </div>
                <div className="col-4">
                  <label htmlFor="">Image Lesson:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="imageUrl"
                    value={success.imageUrl}
                    onChange={this.handelChange}
                    pattern=".{3,30}"
                  />
                  <p className="text-danger">{error.imageUrl}</p>
                </div>
                <div className="col-4">
                  <label htmlFor="">Lesson Course:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="course"
                    value={success.course}
                    onChange={this.handelChange}
                    pattern=".{3,30}"
                  />
                  <p className="text-danger">{error.course}</p>
                </div>
                <div className="col-12">
                  <label htmlFor="">Description Lesson:</label>
                  <textarea
                    className="form-control"
                    type="text"
                    name="description"
                    value={success.description}
                    onChange={this.handelChange}
                    pattern=".{3,30}"
                  >
                    {success.description}
                  </textarea>
                  <p className="text-danger">{error.description}</p>
                </div>
              </div>
              <div className="row ">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ float: "right" }}
                >
                  Save Lesson
                </button>
              </div>
            </form>
          </div>
        </div>
        ;
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    createLesson: (lesson) => {
      dispatch(CreateLesson(lesson));
    },
  };
};

export default connect(null, mapDispatchToProps)(LessonForm);

import React, { Component } from "react";
import SubjectForm from "./SubjectForm";
import SubjectList from "./SubjectList";
import SubjectDetail from "./SubjectDetail";
import SubjectFormUpdate from "./SubjectFormUpdate";

export default class SubjectLayout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <SubjectForm></SubjectForm>
        <SubjectList></SubjectList>
        <SubjectDetail></SubjectDetail>
        <SubjectFormUpdate></SubjectFormUpdate>
      </div>
    );
  }
}

import React, { Component } from "react";
import LessonForm from "./LessonForm";
import LessonList from "./LessonList";
import LessonDetail from "./LessonDetail";

export default class LessonLayout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <LessonForm></LessonForm>
        <LessonList></LessonList>
        <LessonDetail></LessonDetail>
      </div>
    );
  }
}

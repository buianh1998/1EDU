import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SubjectLayout from "./component/subject-component/SubjectLayout";
import { Route, BrowserRouter, Switch, Redirect, Link } from "react-router-dom";
import HomeLayout from "./component/home-component/HomeLayout";
import Header from "./templeate/Header";
import LessonLayout from "./component/lesson-component/LessonLayout";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/subject">Subject</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/lesson">Lesson</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </div>
            <div className="col-9">
              <Switch>
                <Route path="/subject" component={SubjectLayout}></Route>
                <Route path="/lesson" component={LessonLayout}></Route>

                <Route path="/" component={HomeLayout}></Route>
                <Redirect to="/"></Redirect>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

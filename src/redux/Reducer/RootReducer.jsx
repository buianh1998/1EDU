import { combineReducers } from "redux";
import { SubjectReducer } from "./SubjectReducer";
import { LessonReducer } from "./LessonReducer";
export const RootReducer = combineReducers({
  SubjectReducer: SubjectReducer,
  LessonReducer: LessonReducer,
});

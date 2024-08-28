import { configureStore } from "@reduxjs/toolkit";

import questionReducer from "./question_reducer";
import resultReducer from "./result_reducer";

import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});

export default configureStore({ reducer: rootReducer });

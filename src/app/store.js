import { configureStore } from "@reduxjs/toolkit";
import quizzesReducer from "../features/quizzes/quizzesSlice";
import topicsReducer from "../features/topics/topicsSlice";


export default configureStore({
  reducer: {
    topicsReducer: topicsReducer,
    quizzes: quizzesReducer
  },
});

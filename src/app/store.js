import { combineReducers, configureStore } from "@reduxjs/toolkit";
import subredditReducer from "../slices/subredditSlice";
import postReducer from "../slices/postSlice";
import commentReducer from "../slices/commentSlice";

export default configureStore({
  reducer: combineReducers({
    subreddits: subredditReducer,
    posts: postReducer,
    comments: commentReducer,
  }),
});

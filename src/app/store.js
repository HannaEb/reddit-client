import { combineReducers, configureStore } from '@reduxjs/toolkit';
import subRedditReducer from '../slices/subRedditSlice'
import postReducer from '../slices/postSlice'

export default configureStore({
  reducer: combineReducers({
    posts: postReducer,
    subreddits: subRedditReducer
  })
})

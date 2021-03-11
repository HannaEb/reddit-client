import { configureStore } from '@reduxjs/toolkit';
import subRedditReducer from '../slices/subRedditSlice'

export default configureStore({
  reducer: {
    subreddits: subRedditReducer
  }
})

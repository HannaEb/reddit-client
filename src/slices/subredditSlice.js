import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRedditSubreddits } from "../api/reddit";

const initialState = {
  subreddits: [],
  status: "idle",
  error: null,
};

export const fetchSubreddits = createAsyncThunk(
  "subreddits/fetchSubreddits",
  async () => {
    const subreddits = await getRedditSubreddits();
    return subreddits;
  }
);

const subredditSlice = createSlice({
  name: "subreddits",
  initialState,
  reducers: {
    getSubreddits(state, action) {
      state.subreddits = action.payload;
    },
  },
  extraReducers: {
    [fetchSubreddits.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSubreddits.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.subreddits = state.subreddits.concat(action.payload);
    },
    [fetchSubreddits.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { getSubreddits } = subredditSlice.actions;
export const selectSubreddits = (state) => state.subreddits.subreddits;
export default subredditSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPostComments } from "../api/reddit";

const initialState = {
  comments: [],
  status: "idle",
  error: null,
  selectedPost: "",
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (post) => {
    const comments = await getPostComments(post);
    return comments;
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getComments(state, action) {
      state.comments = action.payload;
    },
    setSelectedPost(state, action) {
      state.selectedPost = action.payload;
    },
  },
  extraReducers: {
    [fetchComments.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.comments = action.payload;
    },
    [fetchComments.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { getComments, setSelectedPost } = commentSlice.actions;
export const selectComments = (state) => state.comments.comments;
export default commentSlice.reducer;

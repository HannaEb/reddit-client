import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import { getSubredditPosts } from '../api/reddit'

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
    selectedSubreddit: '/r/funny/',
    searchTerm: ''
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (subreddit) => {
    const posts = await getSubredditPosts(subreddit);
    return posts 
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPosts(state, action) {
            state.posts = action.payload;
        },
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        }
    },
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status ='succeeded'
            state.posts = action.payload;
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export default postSlice.reducer
export const selectPosts = state => state.posts.posts 
export const selectPostById = (state, postId) => state.posts.posts.find(post => post.id === postId)
export const { addPosts, setSelectedSubreddit, setSearchTerm } = postSlice.actions
const selectSearchTerm = state => state.posts.searchTerm

export const selectFilteredPosts = createSelector(
    [selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
      if (searchTerm !== '') {
        return posts.filter(post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
  
      return posts;
    }
  );
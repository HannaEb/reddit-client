import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSubredditPosts } from '../api/reddit'

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
    selectedSubreddit: '/r/funny/'
}

export const fetchPosts = createAsyncThunk('posts/status', async (subreddit) => {
    const posts = await getSubredditPosts(subreddit);
    return posts 
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPosts(state, action) {
            state.posts = action.payload;
        },
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
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
export const { addPosts, setSelectedSubreddit } = postSlice.actions
    
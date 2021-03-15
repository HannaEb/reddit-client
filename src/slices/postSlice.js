import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSubredditPosts } from '../api/reddit'

const initialState = {
    posts: [],
    selectedSubreddit: '/r/funny/'
}

export const fetchPosts = (subreddit) => async (dispatch) => {
    const posts = await getSubredditPosts(subreddit);
    dispatch(addPosts(posts))
}

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
    }
})

export default postSlice.reducer
export const selectPosts = state => state.posts.posts 
export const selectPostById = (state, postId) => state.posts.posts.find(post => post.id === postId)
export const { addPosts, setSelectedSubreddit } = postSlice.actions
    
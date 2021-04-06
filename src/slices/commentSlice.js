import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPostComments } from '../api/reddit'

const initialState = {
    comments: [],
    status: 'idle',
    error: null,
    selectedPermalink: ''
}

export const fetchComments = createAsyncThunk('posts/fetchComments', async (permalink) => {
    const comments = await getPostComments(permalink);
    return comments
})

const commentSlice = createSlice({
    name: 'comments',
    initialState, 
    reducers: {
        getComments(state, action) {
            state.comments = action.payload;
        },
        setSelectedPermalink(state, action) {
            state.selectedPermalink = action.payload;
        }
    },
    extraReducers: {
        [fetchComments.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.status ='succeeded'
            state.comments = action.payload;
        },
        [fetchComments.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export default commentSlice.reducer
export const { getComments, setSelectedPermalink } = commentSlice.actions
export const selectComments = state => state.comments.comments

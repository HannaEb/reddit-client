import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSubreddits } from '../api/reddit'

const initialState = {
    subreddits: [],
    status: 'idle',
    error: null
}

export const fetchSubreddits = createAsyncThunk('subreddits/fetchSubreddits', async (subreddit) => {
    const subreddits = await getSubreddits()
    return subreddits
})

const subRedditSlice = createSlice({
    name: 'subreddits', 
    initialState,
    reducers: {
        addSubreddits(state, action) {
            state.subreddits = action.payload;
        }
    },
    extraReducers: {
        [fetchSubreddits.pending]: (state, action) => {
            state.status= 'loading'
        },
        [fetchSubreddits.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.subreddits = state.subreddits.concat(action.payload)
        },
        [fetchSubreddits.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export const selectSubreddits = state => state.subreddits.subreddits
export const { addSubreddits } = subRedditSlice.actions
export default subRedditSlice.reducer

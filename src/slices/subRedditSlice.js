import { createSlice } from '@reduxjs/toolkit'
import { SiReddit } from 'react-icons/si'
import { getSubreddits } from '../api/reddit';

const initialState = {
    subreddits: []
}

const subRedditSlice = createSlice({
    name: 'subreddits', 
    initialState,
    reducers: {
        addSubreddits(state, action) {
            state.subreddits = action.payload;
        }
    }
})

export const fetchSubreddits = () => async (dispatch) => {
    const subreddits = await getSubreddits()
    dispatch(addSubreddits(subreddits))
}

export const selectSubreddits = state => state.subreddits.subreddits
export const { addSubreddits } = subRedditSlice.actions
export default subRedditSlice.reducer

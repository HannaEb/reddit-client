import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', topic: 'News' },
    { id: '2', topic: 'Technology' },
    { id: '3', topic: 'Wildlife'},
    { id: '4', topic: 'London'}
]

const subRedditSlice = createSlice({
    name: 'subreddits', 
    initialState,
    reducers: {}
})

export default subRedditSlice.reducer
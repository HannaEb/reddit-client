import { createSlice } from '@reduxjs/toolkit'
import { SiReddit } from 'react-icons/si'

const initialState = [
    { id: '1', topic: 'News', icon: <SiReddit size={28} /> },
    { id: '2', topic: 'Technology', icon: <SiReddit size={28} /> },
    { id: '3', topic: 'Wildlife', icon: <SiReddit size={28} />},
    { id: '4', topic: 'London', icon: <SiReddit size={28} />}
]

const subRedditSlice = createSlice({
    name: 'subreddits', 
    initialState,
    reducers: {}
})

export default subRedditSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', title: 'First Post', content: 'Content of first post'},
    { id: '2', title: 'Second Post', content: 'Content of second post'},
    { id: '3', title: 'Third Post', content: 'Content of third post'},
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export default postSlice.reducer
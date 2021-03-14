import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', title: 'First Post', content: 'Content of first post', author: 'Alex'},
    { id: '2', title: 'Second Post', content: 'Content of second post', author: 'Luni'},
    { id: '3', title: 'Third Post', content: 'Content of third post', author: 'Marley'},
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export default postSlice.reducer
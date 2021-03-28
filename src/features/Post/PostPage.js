import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'

const PostPage = ({ match }) => {
    const { postId } = match.params
    const post = useSelector(state => state.posts.posts.find(post => post.id === postId))

    return (
        <>
            <Post post={post} />
        </>
    )
}

export default PostPage

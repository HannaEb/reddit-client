import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'
import Backlink from '../../components/Backlink/Backlink'

const PostPage = ({ match }) => {
    const { postId } = match.params
    const post = useSelector(state => state.posts.posts.find(post => post.id === postId))

    if (!post) {
        return (
            <>
                <div className="notification">Post not found</div>
                <Backlink />
            </>
        )
    }

    return (
        <>
            <Backlink />
            <Post post={post} />
            
        </>
    )
}

export default PostPage

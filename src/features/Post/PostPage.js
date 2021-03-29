import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'
import Backlink from '../../components/Backlink/Backlink'
import { selectPostById } from '../../slices/postSlice'

const PostPage = ({ match }) => {
    const { postId } = match.params
    const post = useSelector(state => selectPostById(state, postId))


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

import React from 'react'
import { useSelector } from 'react-redux'

const Post = ({ match }) => {
    const { postId } = match.params

    const post = useSelector(state => 
        state.posts.find(post => post.id === postId))

    if (!post) {
        return (
            <div>
                <h2>Post not found</h2>
            </div>
        )
    }

    return (
        <article className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </article>
    )
}

export default Post
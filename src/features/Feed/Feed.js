import React from 'react'
import { useSelector } from 'react-redux'
import './Feed.css'
import { Link } from 'react-router-dom'

export const Feed = () => {
    const posts = useSelector(state => state.posts)

    const content = posts.map(post => (

        <article key={post.id} className="single-post">
            <Link to={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0, 100)}</p>
            </Link>
        </article>
        
    ))

    return (
        <div id="feed-container">
            {content}
        </div>
    )
}

export default Feed
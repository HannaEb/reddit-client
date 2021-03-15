import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Feed.css'
import '../Post/Post.css'
import { Link } from 'react-router-dom'
import Post from '../Post/Post'
import { selectPosts, fetchPosts } from '../../slices/postSlice'

export const Feed = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectPosts)
    const selectedSubreddit = useSelector(state => state.posts.selectedSubreddit)

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]);

    const content = posts.map(post => (

        <article key={post.id} className="post">
            <Link to={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
                <img src={post.url} className="post-image"></img>
                <p>{post.author}</p>
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

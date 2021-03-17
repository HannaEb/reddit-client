import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Feed.css'
import '../Post/Post.css'
import { Link } from 'react-router-dom'
import Post from '../Post/Post'
import { selectPosts, fetchPosts } from '../../slices/postSlice'
import { FaCommentAlt } from 'react-icons/fa'
import { ImArrowUp, ImArrowDown } from 'react-icons/im'
import TimeAgo from 'react-timeago'
import Pluralize from 'pluralize'
import abbreviateNumber from '../../utils/abbreviateNumber'

export const Feed = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectPosts)
    const selectedSubreddit = useSelector(state => state.posts.selectedSubreddit)
    const postStatus = useSelector(state => state.posts.status)
    const error = useSelector(state => state.posts.error)

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit))
    }, [selectedSubreddit, dispatch])

    let content

    if (postStatus === 'loading') {
        content = <div className="notification">Loading...</div>
    } else if (postStatus === 'succeeded') {
        content = posts.map((post, index) => (
            <article key={post.id} className="single-post">
                <Link to={`/posts/${post.id}`}>
                    <div className="post-wrapper">
                            <div className="post-container">
                                <div className="post-content">
                                    <p className="post-refs">Posted by {post.author} <TimeAgo date={post.created_utc * 1000} /></p>
                                    <h3 className="post-title">{post.title}</h3>
                                    <img src={post.url} alt="" className="post-image"></img>
                                    <p className="post-text">{post.selftext.substring(0, 100)}</p>
                                </div>  
                                <div className="post-comments">
                                    <FaCommentAlt size={14}/>
                                    <p className="num-comments">{Pluralize('Comment', abbreviateNumber(post.num_comments), true)}</p>
                                </div>
                            </div>
                        <div className="post-votes">
                            <ImArrowUp className="vote-arrow" />
                                <p className="vote-count">{abbreviateNumber(post.ups)}</p>
                            <ImArrowDown className="vote-arrow" />
                        </div>
                    </div>
                </Link>
            </article>
        ))
    } else if (postStatus === 'failed') {
        content = <div className="notification">{error}</div>
    }
    
    return (
        <>
            {content}
        </>
    )
}

export default Feed

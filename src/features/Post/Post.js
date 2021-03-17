import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Post.css'
import { selectPostById } from '../../slices/postSlice'
import { FaCommentAlt } from 'react-icons/fa'
import { ImArrowUp, ImArrowDown } from 'react-icons/im'
import TimeAgo from 'react-timeago'
import Pluralize from 'pluralize'
import abbreviateNumber from '../../utils/abbreviateNumber'

const Post = ( props ) => {
    const {postId} = props.match.params

    const post = useSelector(state => selectPostById(state, postId))

    if (!post) {
        return (
            <div>
                <h2>Post not found</h2>
            </div>
        )
    }

    return (
        <article key={post.id} className="single-post">
                <div className="post-wrapper">
                    <div className="post-container">
                        <div className="post-content">
                            <p className="post-refs">Posted by {post.author} <TimeAgo date={post.created_utc * 1000} /></p>
                            <h3 className="post-title">{post.title}</h3>
                            <img src={post.url} alt="" className="post-image"></img>
                            <p className="post-text">{post.selftext}</p>
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
                    {/* <Link to="/">Back</Link> */}
                </div>
        </article>
    )
}

export default Post
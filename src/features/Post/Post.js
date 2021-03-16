import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Post.css'
import { FaCommentAlt } from 'react-icons/fa'
import { selectPostById } from '../../slices/postSlice'


const Post = ({ match }) => {
    const { postId } = match.params

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
                        <p className="post-refs">Posted by {post.author}</p>
                        <h3 className="post-title">{post.title}</h3>
                        <img src={post.url} className="post-image"></img>
                        <p className="post-text">{post.selftext}</p>
                    </div>  
                    <div className="post-comments">
                        <FaCommentAlt size={14}/>
                        <p className="num-comments">{post.num_comments} Comments</p>
                    </div>
                </div>
                <div className="post-votes"></div>
                {/* <Link to="/">Back</Link> */}
            </div>
        </article>
    )
}



export default Post
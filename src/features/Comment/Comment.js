import React from 'react'
import './Comment.css'

const Comment = (props) => {
    const { comment } = props
    return (
        <div className="comment">
            <div className="comment-text">
                <p>Content</p>
            </div>
            <div className="comment-refs">
                <p className="comment-author">Author</p>
                <p className="comment-created">Date</p>
            </div>
        </div>
    )
}

export default Comment;
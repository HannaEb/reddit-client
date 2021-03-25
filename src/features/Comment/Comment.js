import React from 'react'
import './Comment.css'
import TimeAgo from 'react-timeago'

const Comment = (props) => {
    const { comment } = props
    return (
        <div className="comment">
            <div className="comment-refs">
                <p className="comment-author"></p>
                <p className="comment-created"><TimeAgo date={} /></p>
            </div>
            <div className="comment-body">
                <p></p>
            </div>
        </div>
    )
}

export default Comment;


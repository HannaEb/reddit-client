import React from 'react'
import './Comment.css'
import TimeAgo from 'react-timeago'

const Comment = (props) => {
    const { comment } = props

    return (
        <div key={comment.id} className="comment">
            <div className="comment-refs">
                {/* <p className="comment-author">{comment.author}</p> */}
                <p className="comment-created"><TimeAgo date={comment.created_utc * 1000} /></p>
            </div>
            <div className="comment-body">
                {/* <p>{comment.body}</p> */}
            </div>
        </div>
    )
}

export default Comment;

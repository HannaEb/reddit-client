import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Comment from './Comment'
import './Comment.css'
import { fetchComments, selectComments } from '../../slices/commentSlice'

const CommentsList = () => {
    const selectedPermalink = useSelector(state => state.comments.selectedPermalink)
    const error = useSelector(state => state.comments.error)
    const status = useSelector(state => state.comments.status)
    const comments = useSelector(selectComments) 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchComments(selectedPermalink))
    }, [selectedPermalink, dispatch])

    if (status === 'loading') {
        return (
            <div className="notification">Loading...</div>
        )
    }

    if (status === 'failed') {
        return (
            <div className="notification">{error}</div>
        )
    }

    return (
        <>
            {comments.map((comment) => (
                <Comment comment={comment} />
            ))}
        </>
    )
}

export default CommentsList;

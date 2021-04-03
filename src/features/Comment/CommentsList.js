import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Comment from './Comment'
import './Comment.css'
import { fetchComments, selectComments } from '../../slices/commentSlice'

const CommentsList = () => {
    const selectedPermalink = useSelector(state => state.comments.selectedPermalink)
    const comments = useSelector(selectComments) 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchComments(selectedPermalink))
    }, [selectedPermalink, dispatch])

    return (
        <>
            {comments.map((comment) => (
                <Comment comment={comment} />
            ))}
        </>
    )
}

export default CommentsList;

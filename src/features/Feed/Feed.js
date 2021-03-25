import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Feed.css'
import '../Post/Post.css'
import Post from '../Post/Post'
import { Link } from 'react-router-dom'
import { fetchPosts, selectFilteredPosts, setSearchTerm } from '../../slices/postSlice'
import { FaCommentAlt } from 'react-icons/fa'
import { ImArrowUp, ImArrowDown, ImArrowLeft } from 'react-icons/im'
import TimeAgo from 'react-timeago'
import Pluralize from 'pluralize'
import abbreviateNumber from '../../utils/abbreviateNumber'

const Feed = () => {
    const selectedSubreddit = useSelector(state => state.posts.selectedSubreddit)
    const error = useSelector(state => state.posts.error)
    const postStatus = useSelector(state => state.posts.status)
    const filteredPosts = useSelector(selectFilteredPosts)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit))
    }, [selectedSubreddit, dispatch])

    if (postStatus === 'loading') {
        return (
            <div className="notification">Loading...</div>
        )
    }

    if (postStatus === 'failed') {
        return (
            <>
                <div className="notification">{error}</div>
                <Link to="/" onClick={() => dispatch(setSearchTerm(''))}>
                    <div className="back-link">
                        <ImArrowLeft />
                        <p>Back</p>  
                    </div>
                </Link>
            </>
        )
    }

    if (filteredPosts.length === 0) {
        return (
            <>
                <div className="notification">No posts found</div>
                <Link to="/" onClick={() => dispatch(setSearchTerm(''))}>
                    <div className="back-link">
                        <ImArrowLeft />
                        <p>Back</p>
                    </div>
                </Link>
            </>    
        )
    }
    
    return (
        <>
            {filteredPosts.map((post, index) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default Feed

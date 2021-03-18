import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './Subreddits.css'
import { selectSubreddits, fetchSubreddits } from '../../slices/subRedditSlice'
import IMG from '../../images/reddit-icon.png'
import { setSelectedSubreddit, setSearchTerm } from '../../slices/postSlice'


const Subreddits = () => {
    const dispatch = useDispatch()
    const subreddits = useSelector(selectSubreddits)
    const subredditStatus = useSelector(state => state.subreddits.status)
    const error = useSelector(state => state.subreddits.error)

    useEffect(() => {
        if (subredditStatus === 'idle') {
            dispatch(fetchSubreddits())
        } 
    }, [subredditStatus, dispatch]);

    let content

    if (subredditStatus === 'loading') {
        content = <div>Loading...</div>
    } else if (subredditStatus === 'succeeded') {
        content =  <ul>
                        {subreddits.map((subreddit) => (
                            <Link to="/">
                                <li key={subreddit.id}>
                                    <button onClick={() => 
                                            dispatch(setSelectedSubreddit(subreddit.url)),
                                            dispatch(setSearchTerm(''))
                                            }>
                                        <img src={subreddit.icon_img || IMG} className="subreddit-icon"></img>
                                        <div>{subreddit.display_name}</div>
                                    </button>
                                </li>
                            </Link>
                        ))}     
                    </ul>
    } else if (subredditStatus === 'failed') {
        content = <div>{error}</div>
    }

    return (
        <>
            <div id="subreddits-container">
                 <h2>Subreddits</h2>
                    {content}
            </div>
        </>
    )
}

export default Subreddits;





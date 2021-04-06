import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './Subreddits.css'
import { selectSubreddits, fetchSubreddits } from '../../slices/subRedditSlice'
import IMG from '../../images/reddit-icon.png'
import { setSelectedSubreddit, setSearchTerm } from '../../slices/postSlice'
import { IoMdArrowDropdown} from 'react-icons/io'

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
        content = <div className="notification">Loading...</div>
    } else if (subredditStatus === 'succeeded') {
        content =  <div className="subreddits-container">
        <ul>
                        {subreddits.map((subreddit) => (
                            <Link to="/">
                                <li key={subreddit.id}>
                                    <button onClick={() => 
                                            [dispatch(setSelectedSubreddit(subreddit.url)),
                                            dispatch(setSearchTerm(''))]
                                            }>
                                        <img src={subreddit.icon_img || IMG} className="subreddit-icon" alt=""></img>
                                        <div>{subreddit.display_name}</div>
                                    </button>
                                </li>
                            </Link>
                        ))}     
                    </ul>
                    </div>
    } else if (subredditStatus === 'failed') {
        content = <div className="notification">{error}</div>
    }

    return (
        <div className="subreddits-section">
            <div className="subreddits-header">
                <h2>Subreddits</h2>
                <IoMdArrowDropdown className="dropdown-arrow" size={18}/>
            </div>
            {content}
        </div>
    )
}

export default Subreddits;

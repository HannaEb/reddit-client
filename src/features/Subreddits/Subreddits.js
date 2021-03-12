import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Subreddits.css'
import { selectSubreddits, fetchSubreddits } from '../../slices/subRedditSlice'


const Subreddits = () => {
    const dispatch = useDispatch()
    const subreddits = useSelector(selectSubreddits)

    useEffect(() => {
        dispatch(fetchSubreddits())
    }, [dispatch]);

    return (
        <>
            <div id="subreddits-container">
                <h2>Subreddits</h2>
                <ul>
                    {subreddits.map((subreddit) => (
                        <li key={subreddit.id}>
                            <button>
                                <img src={subreddit.icon_img}></img>
                                <div>{subreddit.display_name}</div>
                            </button>
                        </li>
                    ))}     
                </ul>
            </div>
        </>
    )
}

export default Subreddits;





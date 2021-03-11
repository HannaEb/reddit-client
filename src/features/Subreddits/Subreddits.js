import React from 'react'
import { useSelector } from 'react-redux'
import './Subreddits.css'


export const Subreddits = () => {
    const subreddits = useSelector(state => state.subreddits)

    return (
        <>
            <div id="subreddits-container">
                <h2>Subreddits</h2>
                <ul>
                    {subreddits.map((subreddit) => (
                        <li key={subreddit.id}>
                            <button>
                                <div className="subreddit-icon">{subreddit.icon}</div>
                                <div>{subreddit.topic}</div>
                            </button>
                        </li>
                    ))}     
                </ul>
            </div>
        </>
    )
}
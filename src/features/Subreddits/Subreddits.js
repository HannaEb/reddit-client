import React from 'react'
import { useSelector } from 'react-redux'

export const Subreddits = () => {
    const subreddits = useSelector(state => state.subreddits)
    const renderedSubreddits = subreddits.map(subreddit => (
        <div key={subreddit.id}>
            <h3>{subreddit.topic}</h3>
        </div>
    ))
    return (
        <aside className="subreddits">
            <h2>Subreddits</h2>
            {renderedSubreddits}
        </aside>
    )
}
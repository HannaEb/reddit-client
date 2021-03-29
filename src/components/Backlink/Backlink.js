import React from 'react'
import './Backlink.css'
import { Link } from 'react-router-dom'
import { ImArrowLeft } from 'react-icons/im'

const Backlink = (props) => {
    return (
        <Link to="/" onClick={props.onClick}>
            <div className="back-link">
                <ImArrowLeft />
                <p>Back</p>
            </div>
        </Link>
    )
}

export default Backlink;

import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { SiReddit } from 'react-icons/si'
import './Header.css'

const Header = () => {

    return (
        <header>
            <div className="header-content">
                <div className="logo">
                    <SiReddit className="logo-icon" size={32}/>
                    <h1>reddit<span>client</span></h1>
                </div>
                <form className="search-form">
                    <input className="search-term" type="text" placeholder="Search..." aria-label="Search posts"></input>
                    <button className="search-btn" type="submit" aria-label="Search"><BsSearch /></button>
                </form>
                <div className="hidden-div"></div>
            </div>
        </header>
    )
}

export default Header
import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { SiReddit } from 'react-icons/si'
import './Header.css'


const Header = () => {

    return (
        <header>
            <div className="logo">
                <SiReddit className="logoIcon" size={32}/>
                <h1>reddit<span>client</span></h1>
            </div>
            <form className="searchForm">
                <input className="searchTerm" type="text" placeholder="Search..." aria-label="Search posts"></input>
                <button className="searchBtn" type="submit" aria-label="Search"><BsSearch /></button>
            </form>
            <div className="hiddenDiv">
                
            </div>
        </header>
    )
}

export default Header
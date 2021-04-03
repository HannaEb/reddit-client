import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { SiReddit } from 'react-icons/si'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm } from '../../slices/postSlice'

const Header = () => {
    const [activeSearchTerm, setActiveSearchTerm] = useState('')
    const searchTerm = useSelector(state => state.posts.searchTerm)
    const dispatch = useDispatch()
    
    const onSearchTermChange = e => {
        setActiveSearchTerm(e.target.value);
    }

    useEffect(() => {
        setActiveSearchTerm(searchTerm);
    }, [searchTerm]);

    const onSearchTermSubmit = e => {
        e.preventDefault();
        dispatch(setSearchTerm(activeSearchTerm))
    }

    return (
        <header>
            <div className="header-content">
                <div className="logo">
                    <SiReddit className="logo-icon" size={32}/>
                    <h1>reddit<span>client</span></h1>
                </div>
                <form className="search-form" onSubmit={onSearchTermSubmit}>
                    <input className="search-term" type="text" value={activeSearchTerm} onChange={onSearchTermChange} placeholder="Search..." aria-label="Search posts"></input>
                    <button className="search-btn" type="submit" aria-label="Search" onClick={onSearchTermSubmit}><BsSearch /></button>
                </form>
                <div className="hidden-div"></div>
            </div>
        </header>
    )
}

export default Header;

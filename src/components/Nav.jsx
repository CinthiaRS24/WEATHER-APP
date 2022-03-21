import React from 'react';
import SearchBar from './SearchBar.jsx';
import s from './Nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav ({onSearch}) {

    return (
        <nav className={s.nav}>

            <Link to='/'>
                <span className={s.titleMain}>WEATHER APP</span>
            </Link>

            <Link to='about'>
                <span className={s.titlesNav}>About</span>
            </Link>

            <SearchBar
                onSearch={onSearch}
            />

        </nav> 
    )
}
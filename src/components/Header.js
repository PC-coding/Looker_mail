import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                {/* <img src='' alt='' /> */}
            </div>

            <div className='header_middle'>
                <SearchIcon />
                <input placeholder='Search mail' type='text' />
                <ArrowDropDownIcon className='header_inputIcon' /> 

            </div>

            <div className='header_right'>

            </div>
        </div>
    )
}

export default Header

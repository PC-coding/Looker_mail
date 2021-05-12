import React from 'react'
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox'
import SideBarOption from './SideBarOption';
import StarIcon from '@material-ui/icons/Star';
import './SideBar.css';

function SideBar() {
    return (
        <div className='sideBar'>
            <Button startIcon={<AddIcon fontSize='large'/>}>Compose</Button>
            
            <SideBarOption Icon={InboxIcon} title='Inbox' number={54} />
            <SideBarOption Icon={StarIcon} title='Starred' number={11} />
        </div>
    )
}

export default SideBar;
import React from 'react'
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './SideBar.css';

function SideBar() {
    return (
        <div className='sideBar'>
            <Button startIcon={<AddIcon fontSize='large'/>}>Compose</Button>
        </div>
    )
}

export default SideBar

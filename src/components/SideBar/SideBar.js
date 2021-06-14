import React from 'react'
import { Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox'
import SideBarOption from './SideBarOption';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../features/mailSlice';
import './SideBar.css';

function SideBar() {
    const dispatch = useDispatch();
    return (
        <div className='sideBar'>
            <Button startIcon={<AddIcon fontSize='large'/>} className='sideBar_compose' onClick={() => dispatch(openSendMessage())}>Compose</Button>
            
            <SideBarOption Icon={InboxIcon} title='Inbox' number={54} selected={true} />
           
            <SideBarOption Icon={StarIcon} title='Starred' number={11} />

            <SideBarOption Icon={AccessTimeIcon} title='Snoozed' number={11} />

            <SideBarOption Icon={LabelImportantIcon} title='Important' number={11} />
            
            <SideBarOption Icon={NearMeIcon} title='Sent' number={11} />
            
            <SideBarOption Icon={NoteIcon} title='Drafts' number={11} />
            
            <SideBarOption Icon={ExpandMoreIcon} title='More' number={11} />
            
            <div className='sideBar_footer'>
                <div className='sideBar_footerIcons'>
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
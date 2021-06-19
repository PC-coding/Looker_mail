import React from 'react';
import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from '../Section/Section';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import './EmailList.css';
import EmailRow from './EmailRow';

function EmailList() {
    return (
        <div className='emailList'>
            <div className='emailList_settings'>
                <div className='emailList_settingsLeft'>
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className='emailList_settingsRight'>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className='emailList_Sections'>
                <Section Icon={InboxIcon} title='primary' color='red' selected />
                <Section Icon={PeopleIcon} title='social' color='#1A73E8' />
                <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
            </div>
            <div className='emailList_list'>
                {emails.map(email => (
                    <EmailRow

                    />
                ))}
                <EmailRow
                    title='Twitch'
                    subject='Hello Streamer :)'
                    description='Testing'
                    time='8pm' 
                />
                 <EmailRow
                    title='Twitch'
                    subject='Hello Streamer :)'
                    description='Testing Again'
                    time='8pm' 
                />
            </div>
            
        </div>
    )
}

export default EmailList

import React, { useEffect, useState } from 'react';
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
import { db } from '../firebase';

function EmailList() {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection('emails')
        .orderBy('timestamp', 'desc')
        .onSnapShot((snapshot) =>
            setEmails(
                snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
                }))
            )
        )
    },[]);

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
                {emails.map(({ id, data: { to, subject, message, timestamp 
                } }) => (
                    <EmailRow
                        id = {id}
                        key = {id}
                        title = {to}
                        subject = {subject}
                        description = {message}
                        time = {new Date(timestamp?.seconds * 1000).toUTCString()}
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

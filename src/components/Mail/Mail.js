import { CheckCircle } from '@material-ui/icons';
import React from 'react';
import './Mail.css';

function Mail() {
    return (
        <div className='mail'>
            <div className='mail_tools'>
                <div className='mail_toolsLeft'>
                    <IconButton>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>
                    <IconButton>
                        <ErrorIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <EmailIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>   
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className='mail_toolsRight'>

                </div>
            </div>
        </div>
    )
}

export default Mail

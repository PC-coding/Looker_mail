import { IconButton } from '@material-ui/core';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import React from 'react';
import './EmailRow.css';

function EmailRow({ id, title, subject, description, time }) {
    return (
        <div className='emailRow'>
            <div className='emailRow_options'>
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            
        </div>
    )
}

export default EmailRow

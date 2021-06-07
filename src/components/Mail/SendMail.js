import React from 'react';
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';

function SendMail() {
    return (
        <div className='sendMail'>
            <div className='sendMail_header'>
                <p>message</p>
                <CloseIcon className='sendMail_close' />
            </div>

            <form>
                
                <input type='text' />
                <input type='text' />
                <input type='text' />

                <div className='sendMail_option'>
                    <Button>Send</Button>
                </div>
            </form>
            
        </div>
    )
}

export default SendMail

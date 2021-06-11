import React from 'react';
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { useForm } from 'react-router-dom';

function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='sendMail'>
            <div className='sendMail_header'>
                <p>message</p>
                <CloseIcon className='sendMail_close' />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input placeholder='To' type='text' ref={register({ required: true })} />
                <input placeholder='Subject' type='text' ref={register({ required: true })} />
                <input className='sendMail_message' placeholder='Message...' type='text' ref={register({ required: true })} />

                <div className='sendMail_option'>
                    <Button>Send</Button>
                </div>
            </form>
            
        </div>
    )
}

export default SendMail

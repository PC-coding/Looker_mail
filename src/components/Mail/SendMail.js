import React from 'react';
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { useForm } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/mailSlice';

function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        console.log(formData);
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
                {errors.subject && <p className='sendMail_error'>To is Required!</p>}
                <input className='sendMail_message' placeholder='Message...' type='text' ref={register({ required: true })} />

                <div className='sendMail_option'>
                    <Button>Send</Button>
                </div>
            </form>
            
        </div>
    )
}

export default SendMail

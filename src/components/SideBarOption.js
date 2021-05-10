import React from 'react';
import './SideBarOption.css';

function SideBarOption() {
    return (
        <div className='sideBarOption'>
            <Icon />
            <h1>{title}</h1>
            <p>{number}</p> 
        </div>
    )
}

export default SideBarOption

import React from 'react';
import './SideBarOption.css';

function SideBarOption({ Icon, title, number, selected }) {
    return (
        <div className={`sideBarOption ${selected && "sidebar--active"}`}>
            <Icon />
            <h1>{title}</h1>
            <p>{number}</p> 
        </div>
    )
}

export default SideBarOption

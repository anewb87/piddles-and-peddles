import React, {Component} from 'react';
import './Toggle.scss'

const Toggle = ({ isToggled, onToggle }) => {

    return (
        <label className='toggle'>
            <input type='checkbox' checked={isToggled} onChange={onToggle} />
            <span className='slider' />
        </label>
    )
}

export default Toggle
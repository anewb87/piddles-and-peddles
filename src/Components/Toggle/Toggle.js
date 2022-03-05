import React from 'react';
import PropTypes from 'prop-types';
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

Toggle.propTypes = {
    isToggled: PropTypes.bool,
    onToggle: PropTypes.func,
}
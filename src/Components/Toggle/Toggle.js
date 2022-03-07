import React from 'react';
import PropTypes from 'prop-types';
import './Toggle.scss'

const Toggle = ({ id, addToSafe, removeFromSafe }) => {

   const changeChecked = (event, id) => {
        event.preventDefault()
        event.target.checked = !event.target.checked

        if(event.target.checked) {
            addToSafe(id)
        } else {
            removeFromSafe(id)
        }
   }

    return (
        <label className='toggle'>
            <input type='checkbox' checked={false} onChange={(event) => changeChecked(event)} />
            <span className='slider' />
        </label>
    )
}

export default Toggle

Toggle.propTypes = {
    isToggled: PropTypes.bool,
    onToggle: PropTypes.func,
}
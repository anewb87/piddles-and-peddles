import React from 'react';
import PropTypes from 'prop-types';
import './Toggle.scss'

const Toggle = ({ id, isToggled, onToggle, post }) => {

   const changeChecked = (event) => {
        event.target.checked = !event.target.checked

        if(event.target.checked) {
            //function to post that's passed
        } else {
            //function to delete it

            //invoke post function and pass in id
        }
   }

    return (
        <label className='toggle'>
            <input type='checkbox' checked="false" onChange={(event) => changeChecked(event)} />
            <span className='slider' />
        </label>
    )
}

export default Toggle

Toggle.propTypes = {
    isToggled: PropTypes.bool,
    onToggle: PropTypes.func,
}
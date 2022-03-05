import React from 'react';
import Toggle from '../Toggle/Toggle';
import PropTypes from 'prop-types';
import './ToiletCard.scss';

const ToiletCard = ({ id, location, region, type, isSafe, isToggled, onToggle, addToSafe, toilet, post, handleChange, addToUnsafe }) => {

    return (
        <section className='card'>
            <h2>{location}</h2>
            <p>{region}</p>
            <p>type: {type}</p>
            {/* <button onClick={() => addToSafe(toilet)}>safe?</button> */}


            <Toggle isToggled={isToggled} onToggle={onToggle}/> 
            {/* <button onClick={() => post(toilet)}>safe?</button> */}


            {/* {!isSafe.includes({ id, location, region, type }) ? 
                <button onClick={() => addToSafe({ id, location, region, type })}>YES</button> :
                <button onClick={() => addToSafe({ id, location, region, type })}>NO</button>} */}

        </section>
    )
}

export default ToiletCard

ToiletCard.propTypes = {
    location: PropTypes.string,
    region: PropTypes.string,
    type: PropTypes.string,
    isToggled: PropTypes.bool,
    onToggle: PropTypes.func
}
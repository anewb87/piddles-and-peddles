import React from 'react';
import PropTypes from 'prop-types';
import './ToiletCard.scss';

const ToiletCard = ({ id, park, location, region, type, toilet, postToilet, deleteToilet, checkedStatus }) => {

    const handleCheckbox = (event) => {
        if(event.target.checked) {
            postToilet(toilet)
        } else if (!event.target.checked) {
            deleteToilet(id)
        }
    }

    return (
        <section className='card'>
            {/* where is this?! It's in the data but not coming through here? */}
            <h2>{park}</h2>
            <h3>{location}</h3>
            <p>{region}</p>
            <p>Toilet Type: {type}</p>
            <label htmlFor='safetycheck'>My Bike Feels Safe Here:</label><br/>
            <input id='safetycheck' onChange={(event) => handleCheckbox(event)} type='checkbox' checked={checkedStatus} />
        </section>
    )
}

export default ToiletCard

ToiletCard.propTypes = {
    id: PropTypes.number,
    park: PropTypes.string,
    location: PropTypes.string,
    region: PropTypes.string,
    type: PropTypes.string,
    toilet: PropTypes.object,
    postToilet: PropTypes.func,
    deleteToilet: PropTypes.func,
    checkedStatus: PropTypes.bool
}
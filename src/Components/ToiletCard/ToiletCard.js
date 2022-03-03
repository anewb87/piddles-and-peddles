import React from 'react';
import './ToiletCard.scss';

const ToiletCard = ({ id, location, region, type }) => {
    return (
        <div className='card'>
            <h3>{location}</h3>
            <p>{region}</p>
            <p>Toilet Type: {type}</p>
        </div>
    )
}

export default ToiletCard
import React from 'react';
import './ToiletCard.scss';

const ToiletCard = ({ id, location, region, type }) => {
    return (
        <div className='card'>
            <h2>{location}</h2>
            <p>{region}</p>
            <p>type: {type}</p>
        </div>
    )
}

export default ToiletCard
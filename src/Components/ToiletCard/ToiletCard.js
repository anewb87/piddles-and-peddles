import React from 'react';
import './ToiletCard.scss';

const ToiletCard = ({ id, location, region, type }) => {
    return (
        <div>
            <h3>{location}</h3>
            <p>{region}</p>
            <p>{type}</p>
        </div>
    )
}

export default ToiletCard
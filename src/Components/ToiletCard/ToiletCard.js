import React from 'react';
import './ToiletCard.scss';

const ToiletCard = ({ id, location, region, type, isSafe, addToSafe, addToUnsafe }) => {

    console.log(isSafe)

    return (
        <section className='card'>
            <h2>{location}</h2>
            <p>{region}</p>
            <p>type: {type}</p>
            {!isSafe.includes({ id, location, region, type }) ? 
                <button onClick={() => addToSafe({ id, location, region, type })}>YES</button> :
                <button onClick={() => addToSafe({ id, location, region, type })}>NO</button>}
            {/* <button>NO</button> */}
        </section>
    )
}

export default ToiletCard
import React from 'react';
import PropTypes from 'prop-types';
import './ToiletCard.scss';

const ToiletCard = ({ id, park, location, region, type, toilet, addToSafe, removeFromSafe, postToilet, deleteToilet, checkedStatus }) => {

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
            {/* <p>My Bike Feels Safe Here:</p> */}
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
    addToSafe: PropTypes.func,
    removeFromSafe: PropTypes.func,
    postToilet: PropTypes.func,
    deleteToilet: PropTypes.func,
}


//old stuff below 6:43

// import React from 'react';
// import Toggle from '../Toggle/Toggle';
// import PropTypes from 'prop-types';
// import './ToiletCard.scss';

// const ToiletCard = ({ id, location, region, type, isSafe, isToggled, onToggle, addToSafe, toilet, post, handleChange, addToUnsafe }) => {

//     return (
//         <section className='card'>
//             <h2>{location}</h2>
//             <p>{region}</p>
//             <p>type: {type}</p>
//             {/* <button onClick={() => addToSafe(toilet)}>safe?</button> */}


//             <Toggle id={id} post={post} isToggled={isToggled} />
//             {/* <button onClick={() => post(toilet)}>safe?</button> */}


//             {/* {!isSafe.includes({ id, location, region, type }) ? 
//                 <button onClick={() => addToSafe({ id, location, region, type })}>YES</button> :
//                 <button onClick={() => addToSafe({ id, location, region, type })}>NO</button>} */}

//         </section>
//     )
// }

// export default ToiletCard

// ToiletCard.propTypes = {
//     location: PropTypes.string,
//     region: PropTypes.string,
//     type: PropTypes.string,
//     isToggled: PropTypes.bool,
//     onToggle: PropTypes.func
// }
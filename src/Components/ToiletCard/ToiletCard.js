import React from 'react';
import Toggle from '../Toggle/Toggle';
import PropTypes from 'prop-types';
import './ToiletCard.scss';

const ToiletCard = ({ id, location, region, type, addToSafe, removeFromSafe }) => {

    return (
        <section className='card'>
            <h2>{location}</h2>
            <p>{region}</p>
            <p>Toilet Type: {type}</p>

            <Toggle id={id} addToSafe={addToSafe} removeFromSafe={removeFromSafe}/> 
            {/* <button onClick={() => addToSafe(toilet)}>safe?</button> */}
            {/* <button onClick={() => post(toilet)}>safe?</button> */}
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
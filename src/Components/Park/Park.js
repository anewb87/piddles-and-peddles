import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Error from '../Error/Error';
import ParkFacts from '../ParkFacts/ParkFacts';
import './Park.scss';

const Park = (props) => {
    const parkImage = props.currentPark.images ? props.currentPark.images[1] : {}
    const pageStyle = {
        backgroundImage: `url(${parkImage.url})`,
        backgroundPosition: 'center',
        backgrounRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh'
    }

    if (props.error) {
        return <Error />
    } else {
        console.log('IN PARK', props)
        return (
            <section style={pageStyle} className='park-overview-page'>
                <h1 className='park-page-title'>{props.currentPark.name}</h1>
                <div className='link-container'>
                    <Link to={`/${props.currentPark.parkCode}/park/info`}>
                        <button className='toilets-info-btns'>Park Info</button>
                    </Link>
                    <Link to={`/${props.currentPark.parkCode}/park/potties`}>
                        <button className='toilets-info-btns'>Park Potties</button>
                    </Link>
                </div>

                {/* <Route path={`/${props.parkName}/park/info`} component={ParkFacts} /> */}
            </section>
        )
    }
}
            
    export default Park;

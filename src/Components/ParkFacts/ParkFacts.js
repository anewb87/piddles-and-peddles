import React from 'react';
import { Link } from 'react-router-dom';
import './ParkFacts.scss';


const ParkFacts = ({currentPark}) => {

    // console.log(props)
    // const entranceFee = props.currentPark.entranceFee ? props.currentPark.entranceFee : {}
    return (
        <section className='gen-page'>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <Link to={`/${currentPark.parkName}/park/`}>
                <button>Back to Park</button>
            </Link>
            <div className='flex'>
                <h1 className='info-title'>{currentPark.name} General Info</h1>
                <section className='info-holder'>
                    {/* <section className='flex'> */}
                        <div className='info-bite'>
                            <h2 className='category yellow'>CYCLING / NON-CAR ADMISSION</h2>
                            {/* <p className='orange'>${entranceFee.cost}</p>  */}
                            <p className='yellow'>{currentPark.description}</p>
                            <p className='yellow'>${currentPark.cost} {currentPark.title}</p>
                        </div>
                        <div className='info-bite'>
                            <h2 className='category light-yellow'>OPERATING HOURS</h2>
                            <p className='light-yellow'>{currentPark.operatingHours}</p>
                        </div>
                    {/* </section> */}
                    <div className='info-bite'>
                        <h2 className='category lightest-yellow'>WEATHER</h2>
                        <p className='lightest-yellow'>{currentPark.weather}</p>
                    </div>
                    <p><a className='npsLink category' href={currentPark.npsLink}>Visit the Official NPS Website</a></p>
                </section>
            </div>
        </section>
    )
}

export default ParkFacts
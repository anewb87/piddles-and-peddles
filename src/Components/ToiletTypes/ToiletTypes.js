import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './ToiletTypes.scss'

const ToiletTypes = () => {
    return (
        <section className='toilet-types-page'>
            {/* <Link to='/'>
                <button>Home</button>
            </Link> */}
            <Header/>
            <h2 className='info'>DEAREST READER, <br/> IN THE FUTURE THIS WILL BE THE HIGH HOLY PLACE TO FIND OUT INFORMATION ABOUT THE THREE TOILET TYPES OF UTAH'S NATIONAL PARKS. </h2>
        </section>
    )
}

export default ToiletTypes
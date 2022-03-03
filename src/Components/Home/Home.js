import React from 'react';
import { Link } from 'react-router-dom';
import arches from '../../Assets/arches.jpg';
import bryce from '../../Assets/bryce.jpg';
import canyon from '../../Assets/canyon.jpg';
import capitol from '../../Assets/capitol.jpg';
import zion from '../../Assets/zion.jpg';
import './Home.scss';

const Home = ({ getInfo }) => {

    return (
        <section className ='home-page'>
            <h1>THE MIGHTY FIVE</h1>
            <Link to='toilets'>Toilet Talk</Link>
            <Link to='arch/park'>
                <img className='park-images' src={arches} alt='Picture of Arches National Park that is a link to take you to Arches Main Page'/>
            </Link>
            <Link to='brca/park'>
                <img className='park-images' src={bryce} alt='Picture of Bryce Canyon National Park that is a link to take you to Bryce Main Page' />
            </Link>
            <Link to='cany/park'>
                <img className='park-images' src={canyon} alt='Picture of Canyonlands National Park that is a link to take you to Canyonlands Main Page' />
            </Link>
            <Link to='care/park'>
                <img className='park-images' src={capitol} alt='Picture of Capitol Reef National Park that is a link to take you to Capitol Reef Main Page' />
            </Link>
            <Link to='zion/park'>
                <img className='park-images' src={zion} alt='Picture of Zion National Park that is a link to take you to Zion Main Page' />
            </Link>
        </section>
    )
}

export default Home
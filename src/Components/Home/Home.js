import React from 'react';
import { Link } from 'react-router-dom';
import arches from '../../Assets/arches.jpg';
import bryce from '../../Assets/bryce.jpg';
import canyon from '../../Assets/canyon.jpg';
import capitol from '../../Assets/capitol.jpg';
import zion from '../../Assets/zion.jpg';
import bike from '../../Assets/bike.png'
import './Home.scss';

const Home = (props) => {

    const linkStyle = {
        // textAlign: 'center',
        textDecoration: 'underline',
    }

    return (
        <section className ='home-page'>
            <section className='mighty-five'>
                <div className='intro-box'>
                    <h1 className='mighty-title'>THE MIGHTY FIVE</h1>
                    <Link className='toilet-title' style={linkStyle} to='toilets'>& their toilets</Link>
                    {/* <h2 className='toilet-title'>& their toilets</h2> */}
                    <h2 className='mighty-info'>Yep. You read that right. Not only is southern Utah home to 'The Mighty Five' National Parks, but it's also home to their toilets! With hundres of miles of roads to ramble down, cyclists can now enjoy Mother Nature without having to worry about her inconvenient calls. So grab your helmet, clip-in, and chase that dreamland deuce. You deserve a poo with a view! We're #1 for your #2.
                    </h2>
                    <img className='bike' src={bike} alt='bike logo with toilet paper back wheel'/>
                </div>
                <Link to='arch/park'>
                    <img className='park-images' src={arches} alt='Picture of Arches National Park that is a link to take you to Arches Main Page' onClick={(event) => {props.handleClick(event)}} id='arch'/>
                </Link>
                <Link to='brca/park'>
                    <img className='park-images' src={bryce} alt='Picture of Bryce Canyon National Park that is a link to take you to Bryce Main Page' onClick={(event) => {props.handleClick(event)}} id='brca' />
                </Link>
                <Link to='cany/park'>
                    <img className='park-images' src={canyon} alt='Picture of Canyonlands National Park that is a link to take you to Canyonlands Main Page' onClick={(event) => {props.handleClick(event)}} id='cany' />
                </Link>
                <Link to='care/park'>
                    <img className='park-images' src={capitol} alt='Picture of Capitol Reef National Park that is a link to take you to Capitol Reef Main Page' onClick={(event) => {props.handleClick(event)}} id='care' />
                </Link>
                <Link to='zion/park'>
                    <img className='park-images' src={zion} alt='Picture of Zion National Park that is a link to take you to Zion Main Page' onClick={(event) => {props.handleClick(event)}} id='zion' />
                </Link>
            </section>
        </section>
    )
}

export default Home
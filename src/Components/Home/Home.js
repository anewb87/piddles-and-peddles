import React from 'react';
import { Link } from 'react-router-dom';
// import Park from '../Park/Park';

import './Home.scss';

const Home = () => {
    return (
        <>
            <h1>THE MIGHTY FIVE</h1>
            <Link to='toilets'>
                <button>Toilet Talk</button>
            </Link>
            <Link to='arch'>
                <button>Arches</button>
            </Link>
            <Link to='brca'>
                <button>Bryce</button>
            </Link>
            <Link to='cany'>
                <button>Canyonlands</button>
            </Link>
            <Link to='care'>
                <button>Capitol Reef</button>
            </Link>
            <Link to='zion'>
                <button>Zion</button>
            </Link>
        </>
    )
}

export default Home

// arch, brca, cany, care, zion
import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = ({ getInfo }) => {

    return (
        <>
            <h1>THE MIGHTY FIVE</h1>
            <Link to='toilets'>Toilet Talk</Link>
            <Link to='arch/park'>Arches</Link>
            <Link to='brca/park'>Bryce</Link>
            <Link to='cany/park'>Canyonlands</Link>
            <Link to='care/park'>Capitol Reef</Link>
            <Link to='zion/park'>Zion</Link>
        </>
    )
}

export default Home
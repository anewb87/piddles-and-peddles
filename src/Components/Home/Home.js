import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = ({ getInfo }) => {

    return (
        <>
            <h1>THE MIGHTY FIVE</h1>
            <Link to='toilets'>
                <button>Toilet Talk</button>
            </Link>
            <Link to='arch/park'>
                <button >Arches</button>
            </Link>
            <Link to='brca/park'>
                <button onClick={() => getInfo('brca')}>Bryce</button>
            </Link>
            <Link to='cany/park'>
                <button onClick={() => getInfo('cany')}>Canyonlands</button>
            </Link>
            <Link to='care/park'>
                <button onClick={() => getInfo('care')}>Capitol Reef</button>
            </Link>
            <Link to='zion/park'>
                <button onClick={() => getInfo('zion')}>Zion</button>
            </Link>
        </>
    )
}

export default Home
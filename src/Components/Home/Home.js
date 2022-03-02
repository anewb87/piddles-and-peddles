import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = ({ setParkCode }) => {

    return (
        <>
            <h1>THE MIGHTY FIVE</h1>
            <Link to='toilets'>
                <button>Toilet Talk</button>
            </Link>
            <Link to='arch/park'>
                <button onClick={() => setParkCode('arch')}>Arches</button>
            </Link>
            <Link to='brca/park'>
                <button onClick={() => setParkCode('brca')}>Bryce</button>
            </Link>
            <Link to='cany/park'>
                <button onClick={() => setParkCode('cany')}>Canyonlands</button>
            </Link>
            <Link to='care/park'>
                <button onClick={() => setParkCode('care')}>Capitol Reef</button>
            </Link>
            <Link to='zion/park'>
                <button onClick={() => setParkCode('zion')}>Zion</button>
            </Link>
        </>
    )
}

export default Home
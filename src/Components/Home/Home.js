import React from 'react';
import { Link } from 'react-router-dom';
// import ParkPage from '../ParkPage/ParkPage';

import './Home.scss';

const Home = () => {
    return (
        <>
            <Link to='arch'>
                <button>Arches, please!</button>
            </Link>
            <Link to='brca'>
                <button>Bryce, thank you!</button>
            </Link>
            {/* <Link to=''>
                <button>Bryce, thank you!</button>
            </Link> */}
        </>
    )
}

export default Home

// arch, brca, cany, care, zion
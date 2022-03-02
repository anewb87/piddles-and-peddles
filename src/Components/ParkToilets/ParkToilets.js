import React from 'react';
import { Link } from 'react-router-dom';
import './ParkToilets.scss'

const ParkToilets = () => {
    return (
        <section>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <h2>SPECIFIC PARK TOILET INFO</h2>
        </section>
    )
}

export default ParkToilets
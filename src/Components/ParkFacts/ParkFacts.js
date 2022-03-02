import React from 'react';
import { Link } from 'react-router-dom';
import './ParkFacts.scss'

const ParkFacts = () => {
    return (
        <section>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <h2>SPECIFIC PARK GENERAL INFO</h2>
        </section>
    )
}

export default ParkFacts
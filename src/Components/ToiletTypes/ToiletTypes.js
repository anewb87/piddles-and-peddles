import React from 'react';
import { Link } from 'react-router-dom';
import './ToiletTypes.scss'

const ToiletTypes = () => {
    return (
        <section>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <h2>THE THREE TOILET TYPES OF UTAH'S NATIONAL PARKS</h2>
        </section>
    )
}

export default ToiletTypes
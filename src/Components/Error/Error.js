import React from 'react';
import { Link } from 'react-router-dom';
import './Error.scss';

const Error = () => {
    return (
        <section>
            <h2>Looks like we're biking the wrong way down a one way road. Hop on that cycle and try again.</h2>
            <Link to='/'>
                <button>Try Again</button>
            </Link>
        </section>
    )
}

export default Error
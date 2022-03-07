import React from 'react';
import { Link } from 'react-router-dom';
import './Error.scss';

const Error = () => {
    return (
        <section className='error-page'>
            <h1 className='error-message' data-testid='message'>Looks like we're biking the wrong way down a one way road. <br/>Hop on that cycle and try again.</h1>
            <div className='center-btn'>
                <Link to='/'>
                    <button className='take-home'>Take Me Home (Country Roads)</button>
                </Link>
            </div>
        </section>
    )
}

export default Error
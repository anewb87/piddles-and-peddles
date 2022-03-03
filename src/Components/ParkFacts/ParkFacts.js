import React from 'react';
import { Link } from 'react-router-dom';
import './ParkFacts.scss'

const ParkFacts = ({ info, code, getInfo }) => {

    const checkParkBasedOnUrl = () => {
        if (window.location.href.indexOf('arch') > -1) {
            getInfo('arch')
            console.log('working in Park Facts?')
        } else if (window.location.href.indexOf('brca') > -1) {
            getInfo('brca')
        } else if (window.location.href.indexOf('cany') > -1) {
            getInfo('cany')
        } else if (window.location.href.indexOf('care') > -1) {
            getInfo('care')
        } else if (window.location.href.indexOf('zion') > -1) {
            getInfo('zion')
        }
    }

    window.onload = checkParkBasedOnUrl;

    return (
        <section>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <h1>{info.name} General Info</h1>
            <h2></h2>

        </section>
    )
}

export default ParkFacts

// const ParkFacts = (props) => {
//     const { fromPark } = this.props.location.state
//     console.log(fromPark)
//     return (
//         <section>
//             <Link to='/'>
//                 <button>Home</button>
//             </Link>
//             <h2>SPECIFIC PARK GENERAL INFO</h2>
//         </section>
//     )
// }
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getParkInfo } from '../../apiCalls';
import './ParkPage.scss';


const ParkPage = () => {

    getParkInfo('arch')

    return {
    
    }
}


// class ParkPage extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             selectedPark: props.parkName,
//             parkToilets: [],
//             error: null,
//         }
//     }

//     getParkInfo(this.state.selectedPark)

//     render() {
//         return (
//             <h1>Hello</h1>
//         )
//     }
// }

export default ParkPage
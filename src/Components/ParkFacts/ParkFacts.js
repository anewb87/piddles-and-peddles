import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getParkInfo } from '../../apiCalls';
import './ParkFacts.scss'

class ParkFacts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedParkCode: props.parkName,
            currentPark: {},
            // parkToilets: [],
            error: '',
        }
    }

    componentDidMount() {
        getParkInfo(this.state.selectedParkCode)
            .then(cleanedData => this.setState({ currentPark: cleanedData }))
            .catch(error => this.setState({ error: error }))
    }

    render() {
        
        const entranceFee = this.state.currentPark.entranceFee ? this.state.currentPark.entranceFee : {}
        return (
            <>
                <Link to='/'>
                    <button>Home</button>
                </Link>
                    <Link to={`/${this.state.selectedParkCode}/park/`}>
                        <button>Back to Park</button>
                    </Link>
                <h1>{this.state.currentPark.name} General Info (ParkFacts Component)</h1>
                <p>Admission on a bike: ${entranceFee.cost}</p>
                <p>{entranceFee.description}</p>
                <p>{entranceFee.title}</p>
                <p>{this.state.currentPark.operatingHours}</p>
                <p>{this.state.currentPark.weather}</p>
                <p><a href={this.state.currentPark.npsLink}>Official {this.state.currentPark.name} National Park Service Website</a></p>
    
            </>
        )
    }
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
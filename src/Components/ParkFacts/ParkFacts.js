import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { getParkInfo } from '../../apiCalls';
import './ParkFacts.scss'

class ParkFacts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedParkCode: props.parkName,
            // currentPark: {},
            // parkToilets: [],
            error: '',
        }
    }

    // componentDidMount() {
    //     getParkInfo(this.state.selectedParkCode)
    //         .then(cleanedData => this.setState({ currentPark: cleanedData }))
    //         .catch(error => this.setState({ error: error }))
    // }

    render() {
        
        const entranceFee = this.props.currentPark.entranceFee ? this.props.currentPark.entranceFee : {}
        return (
            <section className='gen-page'>
                <Link to='/'>
                    <button>Home</button>
                </Link>
                <Link to={`/${this.props.parkName}/park/`}>
                    <button>Back to Park</button>
                </Link>
                <div className='flex'>
                    <h1 className='info-title'>{this.props.currentPark.name} General Info</h1>
                    <section className='info-holder'>
                        {/* <section className='flex'> */}
                            <div className='info-bite'>
                                <h2 className='category yellow'>CYCLING / NON-CAR ADMISSION</h2>
                                {/* <p className='orange'>${entranceFee.cost}</p> */}
                                <p className='yellow'>{entranceFee.description}</p>
                                <p className='yellow'>${entranceFee.cost} {entranceFee.title}</p>
                            </div>
                            <div className='info-bite'>
                                <h2 className='category light-yellow'>OPERATING HOURS</h2>
                                <p className='light-yellow'>{this.props.currentPark.operatingHours}</p>
                            </div>
                        {/* </section> */}
                        <div className='info-bite'>
                            <h2 className='category lightest-yellow'>WEATHER</h2>
                            <p className='lightest-yellow'>{this.props.currentPark.weather}</p>
                        </div>
                        <p><a className='npsLink category' href={this.props.currentPark.npsLink}>Visit the Official NPS Website</a></p>
                    </section>
                </div>
            </section>
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
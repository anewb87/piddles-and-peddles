import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getParkInfo } from '../../apiCalls';
import ParkFacts from '../ParkFacts/ParkFacts';
import Error from '../Error/Error';
import './Park.scss';

class Park extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedParkCode: props.parkName,
            currentPark: {},
            parkToilets: [],
            error: '',
        }
    }

    componentDidMount() {
        getParkInfo(this.state.selectedParkCode)
            .then(cleanedData => this.setState({ currentPark: cleanedData }))
            .catch(error => this.setState({ error: error }))
    }

    determineDisplay() {
        const parkImage = this.state.currentPark.images ? this.state.currentPark.images[1] : {}
        const pageStyle = {
            backgroundImage: `url(${parkImage.url})`,
            backgroundPosition: 'center',
            backgrounRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh'
        }

        if (this.state.error) {
            return <Error />
        } else {
            return (
                <section style={pageStyle} className='park-overview-page'>
                    <Link to='/'>
                        <button>Home</button>
                    </Link>
                    <h1 className='park-page-title info-title'>{this.state.currentPark.name}</h1>
                    <div className='link-container'>
                        <Link to={`/${this.state.selectedParkCode}/park/potties`}>
                            <button className='toilets-info-btn'>Park Potties</button>
                        </Link>
                        <p><a className='toilets-info-btn' href={this.state.currentPark.npsLink}>Official NPS Website</a></p>
                    </div>
                    <section className='info-holder'>
                        {/* <section className='flex'> */}
                        <div className='info-bite'>
                            <h2 className='category yellow'>CYCLING / NON-CAR ADMISSION</h2>
                            <p>${this.state.currentPark.cost}</p>
                            <p>{this.state.currentPark.description}</p>
                            <p>${this.state.currentPark.cost} {this.state.currentPark.title}</p>
                        </div>
                        <div className='info-bite'>
                            <h2 className='category'>OPERATING HOURS</h2>
                            <p>{this.state.currentPark.operatingHours}</p>
                        </div>
                        {/* </section> */}
                        <div className='info-bite'>
                            <h2 className='category lightest-yellow'>WEATHER</h2>
                            <p>{this.state.currentPark.weather}</p>
                        </div>
                    </section>
                    {/* <ParkFacts parkCode={this.state.selectedParkCode} currentPark={this.state.currentPark} /> */}
                </section>
            )
        }
    }

    render() {
        return this.determineDisplay()
    }
}

export default Park

// const Park = ({ info, code, getInfo }) => {

//     // const checkParkBasedOnUrl = () => {
//     //     if (window.location.href.indexOf('arch') > -1) {
//     //         getInfo('arch')
//     //         console.log('working?')
//     //     } else if (window.location.href.indexOf('brca') > -1) {
//     //         getInfo('brca')
//     //     } else if (window.location.href.indexOf('cany') > -1) {
//     //         getInfo('cany')
//     //     } else if (window.location.href.indexOf('care') > -1) {
//     //         getInfo('care')
//     //     } else if (window.location.href.indexOf('zion') > -1) {
//     //         getInfo('zion')
//     //     } 
//     // }

//     // window.onload = checkParkBasedOnUrl;

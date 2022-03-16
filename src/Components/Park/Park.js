import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getParkInfo } from '../../apiCalls';
import Error from '../Error/Error';
import PropTypes from 'prop-types';
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
            backgroundSize: 'cover',
            height: '100vh'
        }

        const entranceFee = this.state.currentPark.entranceFee ? this.state.currentPark.entranceFee : {}

        if (this.state.error) {
            return <Error />
        } else {
            return (
                <section style={pageStyle} className='park-overview-page'>
                    <h1 className='park-page-title info-title'>{this.state.currentPark.name}</h1>
                    <div className='link-container'>
                        <Link to='/'>
                            <button data-testid='home-button' className='toilets-info-btn'>Home</button>
                        </Link>
                        <Link to={`/${this.state.selectedParkCode}/park/potties`}>
                            <button data-testid='potties-button'className='toilets-info-btn'>Park Potties</button>
                        </Link>
                        <a data-testid='nps-button' className='toilets-info-btn nps-link' href={this.state.currentPark.npsLink}>NPS Website</a>
                    </div>
                    <p className='description' data-testid='description' >{this.state.currentPark.description}</p>
                    <section className='info-holder'>
                        {/* <section className='flex'> */}
                        <div className='info-bite'>
                            <h2 className='category' data-testid='sub-heading'>CYCLING / NON-CAR ADMISSION: ${entranceFee.cost}</h2>
                            <p data-testid='info-bite'>{entranceFee.description}</p>
                        </div>
                        <div className='info-bite'>
                            <h2 className='category' data-testid='sub-heading'>OPERATING HOURS</h2>
                            <p data-testid='info-bite'>{this.state.currentPark.operatingHours}</p>
                        </div>
                        {/* </section> */}
                        <div className='info-bite'>
                            <h2 className='category' data-testid='sub-heading'>WEATHER</h2>
                            <p data-testid='info-bite'>{this.state.currentPark.weather}</p>
                        </div>
                    </section>
                </section>
            )
        }
    }

    render() {
        return this.determineDisplay()
    }
}

export default Park

Park.propTypes = {
    parkName: PropTypes.string.isRequired,
}
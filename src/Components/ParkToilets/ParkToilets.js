import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getToiletInfo } from '../../apiCalls';
import ToiletCard from '../ToiletCard/ToiletCard';
import arch from '../../Assets/arch.png';
import brca from '../../Assets/brca.png';
import cany from '../../Assets/cany.png';
import care from '../../Assets/care.png';
import zion from '../../Assets/zion.png';

import './ParkToilets.scss'

class ParkToilets extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedParkCode: props.parkName,
            parkToilets: [],
            map: ''
        }
    }

    componentDidMount() {
        getToiletInfo(this.state.selectedParkCode)
            .then(data => this.setState({ parkToilets: data.toilets, map: data.map }))
            .then(this.createToiletCards())
            .catch(error => this.setState({ error: error }))
    }

    determinePark() {
        let parkName
        // let parkImgSrc
        if (this.state.selectedParkCode === 'arch') {
            parkName = 'Arches'
            // parkImgSrc = arch
        } else if (this.state.selectedParkCode === 'brca') {
            parkName = 'Bryce'
            // parkImgSrc = brca
        } else if (this.state.selectedParkCode === 'cany') {
            parkName = 'Canyonlands'
            // parkImgSrc = cany
        } else if (this.state.selectedParkCode === 'care') {
            parkName = 'Capitol Reef'
            // parkImgSrc = care
        } else if (this.state.selectedParkCode === 'zion') {
            parkName = 'Zion'
            // parkImgSrc = zion
        }

        return parkName
    }

    createToiletCards = () => {
        const toiletCards = this.state.parkToilets.map(toilet => {
            return (
                <ToiletCard 
                    key={toilet.id}
                    id={toilet.id}
                    location={toilet.location}
                    region={toilet.region}
                    type={toilet.type}
                />
            )
        })

        return toiletCards
    }

    render() {
        console.log('parkToilets', this.state.parkToilets)
        console.log('image url', this.state.map)
        return (
            <section className='park-toilet-page'>
                <h1 className='toilet-title'>{this.determinePark()} Toilet Locator</h1>
                <Link to='/'>
                    <button>Home</button>
                </Link>
                <Link to={`/${this.state.selectedParkCode}/park/`}>
                    <button>Back to Park</button>
                </Link>
                <section className='info-container'>
                    <div>
                        <img className='map' src={this.state.map} alt={`Map of ${this.determinePark()} National Park Toilets`} />
                    </div>
                    <div>{this.createToiletCards()}</div>
                </section>
            </section>
        )
    }
}

export default ParkToilets
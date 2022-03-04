import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getToiletInfo } from '../../apiCalls';
import ToiletCard from '../ToiletCard/ToiletCard';
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

        if (this.state.selectedParkCode === 'arch') {
            parkName = 'Arches'
        } else if (this.state.selectedParkCode === 'brca') {
            parkName = 'Bryce'
        } else if (this.state.selectedParkCode === 'cany') {
            parkName = 'Canyonlands'
        } else if (this.state.selectedParkCode === 'care') {
            parkName = 'Capitol Reef'
        } else if (this.state.selectedParkCode === 'zion') {
            parkName = 'Zion'
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
                    <div className='toilet-cards'>
                        <div>{this.createToiletCards()}</div>
                    </div>
                </section>
            </section>
        )
    }
}

export default ParkToilets
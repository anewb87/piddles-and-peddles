import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getToiletInfo } from '../../apiCalls';
import ToiletCard from '../ToiletCard/ToiletCard';
import Error from '../Error/Error';
import { postToilet } from '../../apiCalls';
import { getToiletPostings } from '../../apiCalls';
import { deleteRatedToilet } from '../../apiCalls';
import PropTypes from 'prop-types';
import './ParkToilets.scss'

class ParkToilets extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedParkCode: props.parkName,
            parkToilets: [],
            postedToilets: [],
            map: '',
            isLoading: true,
            error: ''
        }
    }

    componentDidMount() {
        getToiletInfo(this.state.selectedParkCode)
            .then(data => this.setState({ parkToilets: data.toilets, map: data.map }))
            .then(this.createToiletCards())
            .catch(error => this.setState({ error: error }))
        
        getToiletPostings()
            .then(data => this.setState(({ postedToilets: data }), this.setState({ isLoading: false })))
    }

    determinePark = () => {
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

    postAToilet = (newToilet) => {
        postToilet(newToilet)
            .catch(error => this.setState({ error: error }))
    }

    deleteAToilet = (toiletId) =>{
        deleteRatedToilet(toiletId)
            .catch(error => this.setState({ error: error }))
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
                    toilet={toilet}
                    postToilet={this.postAToilet}
                    deleteToilet={this.deleteAToilet}
                />
            )
        })

        return toiletCards
    }

    determineRender = () => {
        if (this.state.isLoading) {
            return <section className='loader'>
                <h1 data-testid="loader">LOADING...</h1>
                <iframe src="https://giphy.com/embed/N256GFy1u6M6Y" width="480" height="319" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            </section>
        } else if (this.state.error) {
            return <Error />
        } else {
            return (
                <section className='park-toilet-page'>
                    <h1 data-testid='title' className='park-toilet-title'>{this.determinePark()} Toilet Locator</h1>
                    <div className='place-buttons'>
                        <Link to='/'>
                            <button className='toilet-page-btn' data-testid='btn-home'>Home</button>
                        </Link>
                        <Link to={`/${this.state.selectedParkCode}/park/`}>
                            <button className='toilet-page-btn' data-testid='btn-back-park'>Back to Park</button>
                        </Link>
                        <Link to='/mytoiletratings'>
                            <button className='toilet-page-btn' data-testid='btn-bike-safe'>Bike-Safe Bathrooms</button>
                        </Link>
                    </div>
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

    render() {
        return (
            <section>
                {this.determineRender()}
            </section>
        )

    }
}

export default ParkToilets

ParkToilets.propTypes = {
    parkName: PropTypes.string.isRequired,
}
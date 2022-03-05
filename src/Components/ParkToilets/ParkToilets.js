import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getToiletInfo } from '../../apiCalls';
import ToiletCard from '../ToiletCard/ToiletCard';
import loading from '../../Assets/loading.gif';
import './ParkToilets.scss'

class ParkToilets extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedParkCode: props.parkName,
            parkToilets: [],
            isSafe:[],
            isUnsafe: [],
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
        
        this.setState({ isLoading: false })
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

    addToSafe = (toilet) => {
       const match = this.state.isSafe.find(item => item.id === toilet.id)

        if (!match) {
            this.setState({ isSafe: [...this.state.isSafe, toilet] })
        }
        console.log('this state', this.state.isSafe)
    }

    // addToUnsafe = (toilet) => {
    //     this.setState({ isUnsafe: [...this.state.isUnsafe, toilet] })
    // }

    createToiletCards = () => {
        const toiletCards = this.state.parkToilets.map(toilet => {
            return (
                <ToiletCard 
                    key={toilet.id}
                    id={toilet.id}
                    location={toilet.location}
                    region={toilet.region}
                    type={toilet.type}
                    addToSafe={this.addToSafe}
                    addToUnsafe={this.addToUnsafe}
                    isSafe={this.state.isSafe}
                />
            )
        })

        return toiletCards
    }

    render() {
        if (this.state.isLoading) {
            return <img src={loading} width="480" height="480" frameBorder="0" />
        } else {
            return (
                <section className='park-toilet-page'>
                    <div>{loading}</div>
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
}

export default ParkToilets
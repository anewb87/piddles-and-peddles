import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getToiletInfo } from '../../apiCalls';
import ToiletCard from '../ToiletCard/ToiletCard';
import { rateToilet } from '../../apiCalls';
import './ParkToilets.scss'

class ParkToilets extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedParkCode: props.parkName,
            parkToilets: [],
            isSafe:[],
            currentSafetyCard: {},
            // isUnsafe: [],
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

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ currentSafetyCard: event.target.value })
    }

    postSafe = (safeToilet) => {

        const match = this.state.parkToilets.find(item => item.id === safeToilet.id)

        if(!this.state.isSafe.includes(match)) {
            rateToilet(safeToilet)
                .then(toilet => this.setState({ isSafe: [...this.state.isSafe, toilet] }))
                .catch(error => this.setState({ error: error }))
        }
        

        // rateToilet(safeToilet)
        // .then(toilet => )
    }

    // createSafetyCard = (event) => {
    //     event.preventDefault();
    //     const newCard = {
    //         id: Date.now(),
    //         location:,
    //         type: ,
    //     }
    // }

    addToSafe = (toilet) => {
       const match = this.state.parkToilets.find(item => item.id === toilet.id)
        if (!this.state.isSafe.includes(match)) {
            this.setState({ isSafe: [...this.state.isSafe, match] })
        }
    }

    // handleSubmit = (toilet) => {

    //     const newRating = this.state.parkToilets.find(item => item.id === toilet.id)

    //     const newRating = {
    //         id: Date.now(),
    //         location: ,
    //         type: 
    //     }
    // }

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
                    // handleChange={this.handleChange}
                    // addToSafe={this.addToSafe}
                    post={this.postSafe}

                    // addToUnsafe={this.addToUnsafe}
                    isSafe={this.state.isSafe}
                    toilet={toilet}
                />
            )
        })

        return toiletCards
    }

    render() {
        console.log('is safe', this.state.isSafe)
        if (this.state.isLoading) {
            return <section>
                <h1>LOADING...</h1>
                <iframe src="https://giphy.com/embed/N256GFy1u6M6Y" width="480" height="319" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                </section>
        } else {
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
}

export default ParkToilets
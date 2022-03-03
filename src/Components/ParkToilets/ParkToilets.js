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
            parkToilets: []
        }
    }

    componentDidMount() {
        getToiletInfo(this.state.selectedParkCode)
            .then(data => this.setState({ parkToilets: data }))
            .then(this.createToiletCards())
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
                />
            )
        })

        return toiletCards
    }

    render() {

        return (
            <section>
                <Link to='/'>
                    <button>Home</button>
                </Link>
                <Link to={`/${this.state.selectedParkCode}/park/`}>
                    <button>Back to Park</button>
                </Link>
                <h2>SPECIFIC PARK TOILET INFO</h2>
                <div>{this.createToiletCards()}</div>
            </section>
        )
    }

}

export default ParkToilets
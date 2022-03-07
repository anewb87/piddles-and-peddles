import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getToiletPostings } from '../../apiCalls';
import { postToilet } from '../../apiCalls';
import { deleteRatedToilet } from '../../apiCalls';
import ToiletCard from '../ToiletCard/ToiletCard';
import Error from '../Error/Error';
// import bike from '../../Assets/bike.png';
import './ToiletSafetyReviews.scss';

class ToiletSafetyReviews extends Component {
    constructor() {
        super();
        this.state = {
            postedToilets: [],
            defaultChecked: true,
            error: ''
        }
    }

    componentDidMount() {
        getToiletPostings()
            .then(data => this.setState({ postedToilets: data }))
            .catch(error => this.setState({ error: error }))
    }

    postAToilet = (newToilet) => {
        if (!this.state.postedToilets.includes(newToilet)) {
            postToilet(newToilet)
                .catch(error => this.setState({ error: error }))
        }
    }

    deleteAToilet = (toiletId) => {
        deleteRatedToilet(toiletId)
            .then(response => {
                const removedToilet = this.state.postedToilets.find(toilet => toilet.id === toiletId);
                const filteredToilets = this.state.postedToilets.filter(toilet => toilet.id !== removedToilet.id)

                this.setState({ postedToilets: filteredToilets })
            })

            .catch(error => this.setState({ error: error })) 
    }

    createToiletCards = () => {
        const toiletCards = this.state.postedToilets.map(toilet => {
            return (
                <ToiletCard
                    key={toilet.id}
                    id={toilet.id}
                    park={toilet.park}
                    location={toilet.location}
                    region={toilet.region}
                    type={toilet.type}
                    toilet={toilet}
                    postToilet={this.postAToilet}
                    deleteToilet={this.deleteAToilet}
                    checkedStatus={this.state.defaultChecked}
                />
            )
        })

        return toiletCards
    }

    determineDisplay() {
        if (this.state.error) {
            return <Error />
        } else if (this.state.postedToilets.length === 0) {
            return <section className='redirect-message'>
                <p>How comfortable do you feel <br />leaving your bike while you do your dooties? <br /> Pick your park, visit a privy, and rate how safe you feel your bike was at this location.</p>
                <Link to='/'>
                    <button>Show Me the Mighty Five</button>
                </Link>
                {/* <img className='tp-bike' src={bike} alt='bicycle with toilet paper back tire'></img> */}
            </section>
        } else {
            return <section>
                <h1 className='safe-bike-title'>My Safe Bike Locations</h1>
                <Link to='/'>
                    <button>Home</button>
                </Link>
                {this.createToiletCards()}
            </section>
        }
    }

    render() {
        return (
            <section className='safe-toilets-page'>
                {this.determineDisplay()}
            </section>
        )
    }
}

export default ToiletSafetyReviews
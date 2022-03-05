import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getToiletRatings } from '../../apiCalls';
import ToiletCard from '../ToiletCard/ToiletCard';
import Error from '../Error/Error';

// import { Link } from react-r
import './ToiletSafetyReviews.scss';

class ToiletSafetyReviews extends Component {
    constructor() {
        super();
        this.state = {
            reviewedToilets: [],
            error: ''
        }
    }

    componentDidMount() {
        getToiletRatings()
            .then(data => this.setState({ reviewedToilets: data }))
            .catch(error => this.setState({ error: error }))
    }

    createToiletCards = () => {
        const toiletCards = this.state.reviewedToilets.map(toilet => {
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

    //can I use the same toilet cards? idea to be able to write in comments on this page? (patch?)

    // createSafeToiletCards = () => {
    //     const safeCards = this.state.reviewedToilets.map(toilet => {
    //         return (
    //             <ToiletCard
    //                 key={toilet.id}
    //                 id={toilet.id}
    //                 location={toilet.location}
    //                 // region={toilet.region}
    //                 type={toilet.type}
    //                 // addToSafe={this.addToSafe}
    //                 // addToUnsafe={this.addToUnsafe}
    //                 // isSafe={this.state.isSafe}
    //                 // toilet={toilet}
    //             />
    //         )
    //     })
    //     return safeCards
    // }

    determineDisplay() {
        if (this.state.error) {
            return <Error />
        } else if (this.state.reviewedToilets.length === 0) {
            return <section>
                How comfortable do you feel leaving your bike while you do your dooties? Pick your park, visit a privy, and rate how safe you feel your bike was at this location.
                <Link to='/'>Show Me the Mighty Five</Link>
                </section>
        } else {
            return <section>{this.createToiletCards()}</section>
        }
    }


    render() {
        return (
            <section>
                {this.determineDisplay()}
            </section>
        )   
    }
}

export default ToiletSafetyReviews
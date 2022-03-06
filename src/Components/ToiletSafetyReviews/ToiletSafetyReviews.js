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
            error: ''
        }
    }

    componentDidMount() {
        getToiletPostings()
            .then(data => this.setState({ postedToilets: data }))
            .catch(error => this.setState({ error: error }))
    }

    postAToilet = (newToilet) => {
        console.log('post line 74', this.state)

        if (!this.state.postedToilets.includes(newToilet)) {
            postToilet(newToilet)
            //are these necessary for a post?
            // .then(toilet => console.log('line 61', toilet))
            // .catch(error => this.setState({ error: error }))
        }
    }

    deleteAToilet = (toiletId) => {
        deleteRatedToilet(toiletId)
            .then(response => console.log(response.json()))
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
                    // addToSafe
                    postToilet={this.postAToilet}
                    deleteToilet={this.deleteAToilet}
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


// createSafeToiletCards = () => {
//     const safeCards = this.state.reviewedToilets.map(toilet => {
//         return (
//             <ToiletCard
//                 key={toilet.id}
//                 id={toilet.id}
//                 location={toilet.location}
//                 // region={toilet.region}
//                 type={toilet.type}
//             // addToSafe={this.addToSafe}
//             // addToUnsafe={this.addToUnsafe}
//             // isSafe={this.state.isSafe}
//             // toilet={toilet}
//             />
//         )
//     })
//     return safeCards
// }



// const ToiletSafetyReviews = ({ safeToilets }) => {

//     const determineDisplay = () => {
//         if (safeToilets.length === 0) {
//             return <section>
//                 How comfortable do you feel leaving your bike while you do your dooties? Pick your park, visit a privy, and rate how safe you feel your bike was at this location.
//                 <Link to='/'>Show Me the Mighty Five</Link>
//             </section>
//         } else {
//             return createToiletCards()
//         }
//     }

//     const createToiletCards = () => {
//         const toiletCards = safeToilets.map(toilet => {
//             return (
//                 <ToiletCard
//                     key={toilet.id}
//                     id={toilet.id}
//                     location={toilet.location}
//                     region={toilet.region}
//                     type={toilet.type}
//                     isToggled={this.state.isToggled}
//                     onToggle={this.onToggle}
//                 // isSafe={this.state.isSafe}
//                     // toilet={toilet}
//                 />
//             )
//         })

//         return toiletCards
//     }

//     return (
//         <section>
//             {this.determineDisplay()}
//         </section>
//     )

//     // render() {
//     //     return (
//     //         <section>
//     //             {this.determineDisplay()}
//     //         </section>
//     //     )
//     // }
// }

// export default ToiletSafetyReviews




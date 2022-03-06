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
        console.log('post line 74', this.state)

        if (!this.state.postedToilets.includes(newToilet)) {
            postToilet(newToilet)
                .catch(error => this.setState({ error: error }))
        }
    }


    deleteAToilet = (toiletId) => {
        deleteRatedToilet(toiletId)
            // .then(reponse => getToiletPostings())
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
                    // addToSafe
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




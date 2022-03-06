import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getToiletRatings } from '../../apiCalls';
// import { createToiletCards } from '../../utilities';
import ToiletCard from '../ToiletCard/ToiletCard';
import Error from '../Error/Error';
// import Toggle from '../Toggle/Toggle';
import './ToiletSafetyReviews.scss';


const ToiletSafetyReviews = ({ safeToilets }) => {

    const determineDisplay = () => {
        if (safeToilets.length === 0) {
            return <section>
                How comfortable do you feel leaving your bike while you do your dooties? Pick your park, visit a privy, and rate how safe you feel your bike was at this location.
                <Link to='/'>Show Me the Mighty Five</Link>
            </section>
        } else {
            return createToiletCards()
        }
    }

    const createToiletCards = () => {
        const toiletCards = safeToilets.map(toilet => {
            return (
                <ToiletCard
                    key={toilet.id}
                    id={toilet.id}
                    location={toilet.location}
                    region={toilet.region}
                    type={toilet.type}
                    isToggled={this.state.isToggled}
                    onToggle={this.onToggle}
                // isSafe={this.state.isSafe}
                // toilet={toilet}
                />
            )
        })

        return toiletCards
    }

    return (
        <section>
            {this.determineDisplay()}
        </section>
    )

    // render() {
    //     return (
    //         <section>
    //             {this.determineDisplay()}
    //         </section>
    //     )
    // }
}

export default ToiletSafetyReviews



// class ToiletSafetyReviews extends Component {
//     constructor() {
//         super();
//         this.state = {
//             reviewedToilets: [],
//             isToggled: true,
//             error: ''
//         }
//     }

//     componentDidMount() {
//         getToiletRatings()
//             .then(data => this.setState({ reviewedToilets: data }))
//             .catch(error => this.setState({ error: error }))
//     }

//     onToggle = () => {
//         this.setState({ isToggled: !this.state.isToggled })
//     }

//     createToiletCards = () => {
//         const toiletCards = this.state.reviewedToilets.map(toilet => {
//             return (
//                 <ToiletCard
//                     key={toilet.id}
//                     id={toilet.id}
//                     location={toilet.location}
//                     region={toilet.region}
//                     type={toilet.type}
//                     // addToSafe={this.addToSafe}

//                     // post={this.postSafe}

//                     // addToUnsafe={this.addToUnsafe}
//                     isSafe={this.state.isSafe}
//                     isToggled={this.state.isToggled}
//                     onToggle={this.onToggle}
//                     toilet={toilet}
//                 />
//             )
//         })

//         return toiletCards
//     }

//     determineDisplay() {
//         if (this.state.error) {
//             return <Error />
//         } else if (this.state.reviewedToilets.length === 0) {
//             return <section>
//                 How comfortable do you feel leaving your bike while you do your dooties? Pick your park, visit a privy, and rate how safe you feel your bike was at this location.
//                 <Link to='/'>Show Me the Mighty Five</Link>
//                 </section>
//         } else {
//             // return <section>{createToiletCards(this.state.reviewedToilets)}</section>
//             return this.createToiletCards()
//         }
//     }


//     render() {
//         return (
//             <section>
//                 {this.determineDisplay()}
//             </section>
//         )   
//     }
// }

// export default ToiletSafetyReviews


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
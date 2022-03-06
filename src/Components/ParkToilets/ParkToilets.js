import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getToiletInfo } from '../../apiCalls';
import ToiletCard from '../ToiletCard/ToiletCard';
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
            .then(data => this.setState({ postedToilets: data }))

        this.setState({ isLoading: false })
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
        if(!this.state.postedToilets.includes(newToilet)) {
            postToilet(newToilet)
                //are these necessary for a post?
                // .then(toilet => console.log('line 61', toilet))
                // .catch(error => this.setState({ error: error }))
        }
    }

    deleteAToilet = (toiletId) =>{
        deleteRatedToilet(toiletId)
            .then(response => console.log(response.json()))
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

    render() {
        if (this.state.isLoading) {
            return <section>
                <h1>LOADING...</h1>
                <iframe src="https://giphy.com/embed/N256GFy1u6M6Y" width="480" height="319" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                </section>
        } else {
            return (
                <section className='park-toilet-page'>
                    <h1 className='park-toilet-title'>{this.determinePark()} Toilet Locator</h1>
                    <Link to='/'>
                        <button>Home</button>
                    </Link>
                    <Link to='/mytoiletratings'>
                        <button>My Bike-Safe Bathrooms</button>
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

ParkToilets.propTypes = {
    parkName: PropTypes.string.isRequired,
}




//10:54
    // onToggle = (safeToilet) => {
    //     if (!this.state.isToggled) {
    //         this.postSafe(safeToilet)
    //     }
    //     this.setState({ isToggled: !this.state.isToggled })
    // }

    
    //pass id in instead of safeToilet
    // postSafe = (safeToilet) => {

    //     const match = this.state.parkToilets.find(item => item.id === safeToilet.id)

    //     if(!this.state.isSafe.includes(match)) {
    //         rateToilet(safeToilet)
    //             .then(toilet => this.setState({ isSafe: [...this.state.isSafe, toilet] }))
    //             .catch(error => this.setState({ error: error }))
    //     }
    // }

    // addToSafe = (toilet) => {
    //    const match = this.state.parkToilets.find(item => item.id === toilet.id)
    //     if (!this.state.isSafe.includes(match)) {
    //         this.setState({ isSafe: [...this.state.isSafe, match] })
    //     }
    // }

    // addToUnsafe = (toilet) => {
    //     this.setState({ isUnsafe: [...this.state.isUnsafe, toilet] })
    // }










//old stuff as of 6:35
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { getToiletInfo } from '../../apiCalls';
// import ToiletCard from '../ToiletCard/ToiletCard';
// import { rateToilet } from '../../apiCalls';
// import PropTypes from 'prop-types';
// import './ParkToilets.scss'

// class ParkToilets extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedParkCode: props.parkName,
//             parkToilets: [],
//             isSafe: [],
//             // isToggled: false,
//             map: '',
//             isLoading: true,
//             error: ''
//         }
//     }

//     componentDidMount() {
//         getToiletInfo(this.state.selectedParkCode)
//             .then(data => this.setState({ parkToilets: data.toilets, map: data.map }))
//             .then(this.createToiletCards())
//             .catch(error => this.setState({ error: error }))

//         this.setState({ isLoading: false })
//     }

//     determinePark() {
//         let parkName
//         if (this.state.selectedParkCode === 'arch') {
//             parkName = 'Arches'
//         } else if (this.state.selectedParkCode === 'brca') {
//             parkName = 'Bryce'
//         } else if (this.state.selectedParkCode === 'cany') {
//             parkName = 'Canyonlands'
//         } else if (this.state.selectedParkCode === 'care') {
//             parkName = 'Capitol Reef'
//         } else if (this.state.selectedParkCode === 'zion') {
//             parkName = 'Zion'
//         }
//         return parkName
//     }

//     onToggle = (safeToilet) => {
//         if (!this.state.isToggled) {
//             this.postSafe(safeToilet)
//         }
//         this.setState({ isToggled: !this.state.isToggled })
//     }


//     //pass id in instead of safeToilet
//     postSafe = (safeToilet) => {

//         const match = this.state.parkToilets.find(item => item.id === safeToilet.id)

//         if (!this.state.isSafe.includes(match)) {
//             rateToilet(safeToilet)
//                 .then(toilet => this.setState({ isSafe: [...this.state.isSafe, toilet] }))
//                 .catch(error => this.setState({ error: error }))
//         }
//     }

//     // addToSafe = (toilet) => {
//     //    const match = this.state.parkToilets.find(item => item.id === toilet.id)
//     //     if (!this.state.isSafe.includes(match)) {
//     //         this.setState({ isSafe: [...this.state.isSafe, match] })
//     //     }
//     // }

//     // addToUnsafe = (toilet) => {
//     //     this.setState({ isUnsafe: [...this.state.isUnsafe, toilet] })
//     // }

//     createToiletCards = () => {
//         const toiletCards = this.state.parkToilets.map(toilet => {
//             return (
//                 <ToiletCard
//                     key={toilet.id}
//                     id={toilet.id}
//                     location={toilet.location}
//                     region={toilet.region}
//                     type={toilet.type}
//                     // addToSafe={this.addToSafe}
//                     // post={this.postSafe}
//                     post={this.onToggle}
//                     isSafe={this.state.isSafe}
//                     // isToggled={this.state.isToggled}

//                     // addToUnsafe={this.addToUnsafe}
//                     isSafe={this.state.isSafe}
//                     toilet={toilet}
//                 />
//             )
//         })

//         return toiletCards
//     }

//     render() {
//         if (this.state.isLoading) {
//             return <section>
//                 <h1>LOADING...</h1>
//                 <iframe src="https://giphy.com/embed/N256GFy1u6M6Y" width="480" height="319" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
//             </section>
//         } else {
//             return (
//                 <section className='park-toilet-page'>
//                     <h1 className='park-toilet-title'>{this.determinePark()} Toilet Locator</h1>
//                     <Link to='/'>
//                         <button>Home</button>
//                     </Link>
//                     <Link to='/mytoiletratings'>
//                         <button>My Safe Toilets</button>
//                     </Link>
//                     <Link to={`/${this.state.selectedParkCode}/park/`}>
//                         <button>Back to Park</button>
//                     </Link>
//                     <section className='info-container'>
//                         <div>
//                             <img className='map' src={this.state.map} alt={`Map of ${this.determinePark()} National Park Toilets`} />
//                         </div>
//                         <div className='toilet-cards'>
//                             <div>{this.createToiletCards()}</div>
//                         </div>
//                     </section>
//                 </section>
//             )
//         }
//     }
// }

// export default ParkToilets

// ParkToilets.propTypes = {
//     parkName: PropTypes.string.isRequired,
// }
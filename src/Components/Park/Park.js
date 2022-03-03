import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Error from '../Error/Error';
import { getParkInfo } from '../../apiCalls';
import './Park.scss';


class Park extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedParkCode: props.parkName,
            currentPark: {},
            parkToilets: [],
            error: '',
        }
    }

    componentDidMount() {
        getParkInfo(this.state.selectedParkCode)
            .then(cleanedData => this.setState({ currentPark: cleanedData }))
            .catch(error => this.setState({ error: error }))
    }

    

    determineDisplay() {
        // const parkImage = this.state.currentPark.images ? this.state.currentPark.images[0] : []

        // console.log('park image', parkImage)
        
        // if (this.state.error) {
        //     return <Error />
        // } else {
        //     return (
        //         <section style={pageStyle}>
        //             <h1>{this.state.currentPark.name}</h1>
        //             {/* <img src={parkImage.url}/> */}
        //             <Link to={`/${this.state.selectedParkCode}/park/info`}>
        //                 <button>Park Info</button>
        //             </Link>
        //             <Link to={`/${this.state.selectedParkCode}/park/potties`}>
        //                 <button>Park Potties</button>
        //             </Link>
        //         </section>
        //     )
        // }
    }

    render() {
        const parkImage = this.state.currentPark.images ? this.state.currentPark.images[0] : {}
        const pageStyle = {
            backgroundImage: `url(${parkImage.url})`,
            backgroundSize: '100%',
            // height: '100%',
            // overlfow: 'hidden'
            // width: '100vw',
            // height: '100%'
            //need to figure this out
        }

        if (this.state.error) {
            return <Error />
        } else {
            return (
                <section style={pageStyle}>
                    <h1>{this.state.currentPark.name}</h1>
                    {/* <img src={parkImage.url}/> */}
                    <Link to={`/${this.state.selectedParkCode}/park/info`}>
                        <button>Park Info</button>
                    </Link>
                    <Link to={`/${this.state.selectedParkCode}/park/potties`}>
                        <button>Park Potties</button>
                    </Link>
                </section>
            )
        }
        // return this.determineDisplay()
    }
}

export default Park

// const Park = ({ info, code, getInfo }) => {

//     // const checkParkBasedOnUrl = () => {
//     //     if (window.location.href.indexOf('arch') > -1) {
//     //         getInfo('arch')
//     //         console.log('working?')
//     //     } else if (window.location.href.indexOf('brca') > -1) {
//     //         getInfo('brca')
//     //     } else if (window.location.href.indexOf('cany') > -1) {
//     //         getInfo('cany')
//     //     } else if (window.location.href.indexOf('care') > -1) {
//     //         getInfo('care')
//     //     } else if (window.location.href.indexOf('zion') > -1) {
//     //         getInfo('zion')
//     //     } 
//     // }

//     // window.onload = checkParkBasedOnUrl;

        

//     useEffect(() => {
//         getParkInfo(code)
//             .then(cleanedData => this.setState({ currentPark: cleanedData, selectedParkCode: code }))
//             .catch(error => this.setState({ error: error }))
//     })

//      return (
//         <>
//             <h1>{info.name} (Park Component)</h1>
//             <h2>{info.description}</h2>
//             <Link to={`/${code}/park/info`}>
//                 <button>Park Info</button>
//             </Link>
//             <Link to={`/${code}/park/potties`}>
//                 <button>Park Potties</button>
//             </Link>
//         </>
//     )
// }

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
            currentPark: null,
            parkToilets: [],
            error: '',
            thing: 'hello'
        }
    }

    componentDidMount() {
        getParkInfo(this.state.selectedParkCode)
            .then(cleanedData => console.log('cleaned data, line 19',cleanedData))
            .then(cleanedData => this.setState({ currentPark: cleanedData }))
            //these console logs below are running before the one on line 19
            .then(console.log('this.state, line 22', this.state))
            .then(console.log('this.state.fullName, line 23', this.state.fullName))
            .catch(error => this.setState({ error: error }))
    }


    render() {
        console.log('in render', console.log(this.state.thing))
        if (this.state.error) {
            return <Error/>
        } else {
            return (
                <>
                    <Link to={`${this.state.selectedParkCode}/park/info`}>
                        <button>Park Info</button>
                    </Link>
                    <Link to={`${this.state.selectedParkCode}/park/potties`}>
                        <button>Park Potties</button>
                    </Link>
                </>
            )
        }
    }
}

export default Park
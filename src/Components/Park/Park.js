import React, { Component } from 'react';
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
            error: ''
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
        if (this.state.error) {
            return <Error/>
        } else {
            return (
                <h1>Park Page</h1>
            )
        }
    }
}

export default Park
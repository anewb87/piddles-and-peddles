import React, { Component } from 'react';
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
            error: ''
        }
    }

    getParkInfo(this.state.selectedParkCode)
        .then(cleanedData => this.setState({ currentPark: cleanedData }))
        .catch(error => this.setState({ error: error }))

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
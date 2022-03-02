import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ParkPage.scss';

class ParkPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedPark: props.parkName,
            parkToilets: [],
            error: null,
        }
    }


    getParkInfo = (name) => {
        return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${name}&api_key=ZFh4J8ek4qkf10nPDT0FsTn1hgslzolLkGQMkXvd`)
            .then(response => response.json())
            .then(data => console.log('data', data))
        // .then(data => this.setState({ sightings: data }))
    }

    getParkInfo(this.state.selectedPark );

    render() {

        return (
            <h1>Hello</h1>
        )
    }
}

export default ParkPage
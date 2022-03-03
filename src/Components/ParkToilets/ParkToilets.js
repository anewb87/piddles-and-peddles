import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getToiletInfo } from '../../apiCalls';
import './ParkToilets.scss'

class ParkToilets extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedParkCode: props.parkName,
            parkToilets: []
        }
    }

    componentDidMount() {
        getToiletInfo(this.state.selectedParkCode)
            .then(data => this.setState({ parkToilets: data }))
            .catch(error => this.setState({ error: error }))
    }

    render() {
        
        return (
            <section>
                <Link to='/'>
                    <button>Home</button>
                </Link>
                <h2>SPECIFIC PARK TOILET INFO</h2>
            </section>
        )
    }

}

export default ParkToilets
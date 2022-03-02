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
            thing: 'hello'
        }
    }

    componentDidMount() {
        getParkInfo(this.state.selectedParkCode)
            .then(cleanedData => this.setState({ currentPark: cleanedData }))
            .catch(error => this.setState({ error: error }))
    }

    determineDisplay() {
        if (this.state.error) {
            return <Error />
        } else {
            return (
                <>
                    <h1>{this.state.currentPark.name}</h1>
                    <Link to={{
                        pathname: `/${this.state.selectedParkCode}/park/info`,
                        state: {
                            fromPark: true
                        }
                    }}>
                        <button>Park Info</button>
                    </Link>
                    <Link to={`/${this.state.selectedParkCode}/park/potties`}>
                        <button>Park Potties</button>
                    </Link>
                </>
            )
        }
    }

    render() {
        return this.determineDisplay()
    }
}

export default Park
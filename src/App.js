import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink, Link, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import ToiletTypes from './Components/ToiletTypes/ToiletTypes'
import Park from './Components/Park/Park';
import ParkToilets from './Components/ParkToilets/ParkToilets';
import ParkFacts from './Components/ParkFacts/ParkFacts';
import Error from './Components/Error/Error';
import './General Styles/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allParks: [],
      selectedPark: {},
      parkToilets: [],
      error: null,
    }
  }

  render() {

    return (
      <main className = 'app'>
        <Switch>
          <Route exact path='/' render={() => <Home/>} />
          <Route exact path='/toilets' render={() => <ToiletTypes/>} />
          <Route exact path='/error' render={() => <Error/>} />
          <Route exact path='/:parkroute' render={({ match }) => {
            return <Park parkName={match.params.parkroute} />
          }}/>
          <Route exact path='/:parkroute/info' render={() => <ParkFacts/>} />
          <Route exact path='/:parkroute/potties' render={() => <ParkToilets />} />
          <Redirect to='/error'/>
        </Switch>
      </main>
    )
  }

}

export default App;

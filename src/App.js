import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink, Link, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import ToiletTypes from './Components/ToiletTypes/ToiletTypes'
import Park from './Components/Park/Park';
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
          <Route exact path='/:parkroute' render={({ match }) => {
            return <Park parkName={match.params.parkroute} />
          }}/>
          {/* <Route path='/error' render={() => <Error/>} />
          <Redirect to='/error'/> */}
        </Switch>
      </main>
    )
  }

}

export default App;

import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink, Link, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import AllToilets from './Components/AllToilets/AllToilets'
import ParkPage from './Components/ParkPage/ParkPage';
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
          {/* <Route path='/toilets' render={() => <AllToilets/>} /> */}
          <Route path='/:parkroute' render={({ match }) => {
            return <ParkPage parkName={match.params.parkroute} />
          }}/>
          {/* <Route path='/error' render={() => <Error/>} />
          <Redirect to='/error'/> */}
        </Switch>
      </main>
    )
  }

}

export default App;

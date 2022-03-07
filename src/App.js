import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home/Home';
import ToiletTypes from './Components/ToiletTypes/ToiletTypes'
import Park from './Components/Park/Park';
import ParkToilets from './Components/ParkToilets/ParkToilets';
import Error from './Components/Error/Error';
import ToiletSafetyReviews from './Components/ToiletSafetyReviews/ToiletSafetyReviews';


const App = () => {

  return (
    <main className='app'>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/toilettypes' render={() => <ToiletTypes />} />
        <Route exact path='/:parkroute/park' render={({ match }) => {
          return <Park parkName={match.params.parkroute} />
        }} />
        <Route exact path='/:parkroute/park/potties' render={({ match }) => <ParkToilets parkName={match.params.parkroute} />} />
        <Route exact path='/mytoiletratings' render={() => <ToiletSafetyReviews/>} />
        <Route exact path='/error' render={() => <Error />} />
        <Redirect to='/error' />
      </Switch>
    </main>
  )
}

export default App;
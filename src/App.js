import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink, Link, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import ToiletTypes from './Components/ToiletTypes/ToiletTypes'
import Park from './Components/Park/Park';
import ParkToilets from './Components/ParkToilets/ParkToilets';
// import ParkFacts from './Components/ParkFacts/ParkFacts';
import Error from './Components/Error/Error';

class App extends Component {
  constructor() {
    super()
    this.state = {
      // selectedParkCode: '',
      currentPark: {},
      parkToilets: [],
      error: '',
    }
  }

  getInfoFromPark = (parkData) => {
    this.setState({ currentPark: parkData })
  }

  render() {
    return (
      <main className= 'app'>
        <Switch>
          <Route exact path='/' render={() => <Home implementInfo={this.implementParkInfo} />} />
          <Route exact path='/toilets' render={() => <ToiletTypes />} />
          <Route exact path='/:parkroute/park' render={({ match }) => {
            return <Park parkName={match.params.parkroute} getInfo={this.getInfoFromPark} currentPark={this.state.currentPark} />
          }}/>
          {/* <Route exact path='/:parkroute/park/info' render={({ match }) => <ParkFacts parkName={match.params.parkroute} />} /> */}
          <Route exact path='/:parkroute/park/potties' render={( { match } ) => <ParkToilets parkName={match.params.parkroute}/>} />
          <Route exact path='/error' render={() => <Error/>} />
          <Redirect to='/error'/>
        </Switch>
      </main>
    )
  }
}

export default App;


// const App = () => {
//   return (
//     <main className='app'>
//       <Switch>
//         <Route exact path='/' render={() => <Home />} />
//         <Route exact path='/toilets' render={() => <ToiletTypes />} />
//         <Route exact path='/:parkroute/park' render={({ match }) => {
//           return <Park parkName={match.params.parkroute} />
//         }} />
//         <Route exact path='/:parkroute/park/info' render={() => <ParkFacts />} />
//         <Route exact path='/:parkroute/park/potties' render={() => <ParkToilets />} />
//         <Route exact path='/error' render={() => <Error />} />
//         <Redirect to='/error' />
//       </Switch>
//     </main>
//   )
// }


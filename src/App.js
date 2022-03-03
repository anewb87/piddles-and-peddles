import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink, Link, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import ToiletTypes from './Components/ToiletTypes/ToiletTypes'
import Park from './Components/Park/Park';
import ParkToilets from './Components/ParkToilets/ParkToilets';
import ParkFacts from './Components/ParkFacts/ParkFacts';
import Error from './Components/Error/Error';
import { getParkInfo } from './apiCalls';
import './General Styles/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedParkCode: '',
      currentPark: {},
      parkToilets: [],
      error: '',
      thing: 'hello'
    }
  }

  implementParkInfo = (code) => {
    getParkInfo(code)
      .then(cleanedData => this.setState({ currentPark: cleanedData, selectedParkCode: code}))
      .catch(error => this.setState({ error: error }))
  }

  render() {
    return (
      <main className = 'app'>
        <Switch>
          <Route exact path='/' render={() => <Home getInfo={this.implementParkInfo}/>} />
          <Route exact path='/toilets' render={() => <ToiletTypes/>} />
          <Route exact path='/:parkroute/park' render={() => {
            return <Park info={this.state.currentPark} code={this.state.selectedParkCode} getInfo={this.implementParkInfo}/>
          }}/>
          <Route exact path='/:parkroute/park/info' render={() => <ParkFacts info={this.state.currentPark} code={this.state.selectedParkCode} getInfo={this.implementParkInfo}/>} />
          <Route exact path='/:parkroute/park/potties' render={() => <ParkToilets />} />
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


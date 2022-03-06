import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home/Home';
import ToiletTypes from './Components/ToiletTypes/ToiletTypes'
import Park from './Components/Park/Park';
import ParkToilets from './Components/ParkToilets/ParkToilets';
import Error from './Components/Error/Error';
import ToiletSafetyReviews from './Components/ToiletSafetyReviews/ToiletSafetyReviews';

class App extends Component {
  constructor() {
    super();
    this.state = {
      safeToilets: [],
    }
  }

  addToSafe = (newToilet) => {
    this.setState({ safeToilets: [...this.state.safeToilets], newToilet })
  }

  removeFromSafe = (id) => {
    const filteredToilets = this.state.safeToilets.filter(toilet => toilet.id !== id);

    this.setState({ safeToilets: filteredToilets })
  }

  render() {
    return (
      <main className= 'app'>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/toilettypes' render={() => <ToiletTypes />} />
          <Route exact path='/:parkroute/park' render={({ match }) => {
            return <Park parkName={match.params.parkroute} />
          }}/>
          <Route exact path='/:parkroute/park/potties' render={({ match }) => <ParkToilets parkName={match.params.parkroute} addToSafe={this.addToSafe} removeFromSafe={this.removeFromSafe}/>} />
          <Route exact path='/mytoiletratings' render={() => <ToiletSafetyReviews safeToilets={this.state.safeToilets} />} />
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
//         <Route exact path='/toilettypes' render={() => <ToiletTypes />} />
//         <Route exact path='/:parkroute/park' render={({ match }) => {
//           return <Park parkName={match.params.parkroute} />
//         }} />
//         <Route exact path='/:parkroute/park/potties' render={({ match }) => <ParkToilets parkName={match.params.parkroute} />} />
//         <Route exact path='/error' render={() => <Error />} />
//         <Route exact path='/mytoiletratings' render={() => <ToiletSafetyReviews />} />
//         <Redirect to='/error' />
//       </Switch>
//     </main>
//   )
// }
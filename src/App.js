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
    <main className= 'app'>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/toilettypes' render={() => <ToiletTypes />} />
        <Route exact path='/:parkroute/park' render={({ match }) => {
          return <Park parkName={match.params.parkroute} />
        }}/>
        <Route exact path='/:parkroute/park/potties' render={( { match } ) => <ParkToilets parkName={match.params.parkroute}/>} />
        <Route exact path='/error' render={() => <Error/>} />
        <Route exact path='/mytoiletratings' render={() => <ToiletSafetyReviews/> } />
        <Redirect to='/error'/>
      </Switch>
    </main>
  )
}

//add to favorites and remove from favorites, just pass the two functions down,
//

export default App;

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       // selectedParkCode: '',
//       currentPark: {},
//       parkToilets: [],
//       error: '',
//     }
//   }

//   getInfoFromPark = (parkData) => {
//     this.setState({ currentPark: parkData })
//   }

//   render() {
//     return (
//       <main className='app'>
//         <Switch>
//           <Route exact path='/' render={() => <Home implementInfo={this.implementParkInfo} />} />
//           <Route exact path='/toilets' render={() => <ToiletTypes />} />
//           <Route exact path='/:parkroute/park' render={({ match }) => {
//             return <Park parkName={match.params.parkroute} getInfo={this.getInfoFromPark} currentPark={this.state.currentPark} />
//           }} />
//           {/* <Route exact path='/:parkroute/park/info' render={({ match }) => <ParkFacts parkName={match.params.parkroute} />} /> */}
//           <Route exact path='/:parkroute/park/potties' render={({ match }) => <ParkToilets parkName={match.params.parkroute} />} />
//           <Route exact path='/error' render={() => <Error />} />
//           <Redirect to='/error' />
//         </Switch>
//       </main>
//     )
//   }
// }

// export default App;


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


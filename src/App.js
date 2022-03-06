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


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       // parkToilets: [],
//       // safeToilets: [],
//     }
//   }

//   // addToSafe = (newToilet) => {
//   //   console.log('new Toilet', newToilet)
//   //   console.log('newToilet id', newToilet.id)
//   //   console.log('newToilet id type of', typeof newToilet.id)

//   //   const foundToilet = this.state.safeToilets.find(toilet => {
//   //    console.log('line 24', typeof toilet.id)
//   //     return toilet.id === newToilet.id})

//   //   console.log('found toilet', foundToilet)

//   //   if(!this.state.safeToilets.includes(foundToilet))
//   //     this.setState({ safeToilets: [...this.state.safeToilets, foundToilet] })
//   // }

//   // removeFromSafe = (toiletId) => {
//   //   const removedToilet = this.state.safeToilets.find(toilet => toilet.id !== toiletId);
//   //   const filteredToilets = this.state.safeToilets.filter(toilet => toilet.id !== removedToilet.id)
//   //   this.setState({ safeToilets: filteredToilets })
//   // }

//   render() {
//     return (
//       <main className= 'app'>
//         <Switch>
//           <Route exact path='/' render={() => <Home />} />
//           <Route exact path='/toilettypes' render={() => <ToiletTypes />} />
//           <Route exact path='/:parkroute/park' render={({ match }) => {
//             return <Park parkName={match.params.parkroute} />
//           }}/>
//           <Route exact path='/:parkroute/park/potties' render={({ match }) => <ParkToilets parkName={match.params.parkroute} />} />
//           <Route exact path='/mytoiletratings' render={() => <ToiletSafetyReviews safeToilets={this.state.safeToilets} />} />
//           <Route exact path='/error' render={() => <Error/>} />
//           <Redirect to='/error'/>
//         </Switch>
//       </main>
//     )
//   }
// }

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
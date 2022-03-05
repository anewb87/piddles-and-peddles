import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink, Link, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import ToiletTypes from './Components/ToiletTypes/ToiletTypes'
import Park from './Components/Park/Park';
import ParkToilets from './Components/ParkToilets/ParkToilets';
import ParkFacts from './Components/ParkFacts/ParkFacts';
import Error from './Components/Error/Error';
import { getParkInfo, getToiletInfo } from './apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedParkCode: '',
      currentPark: {},
      parkToilets: [],
      error: '',
    }
  }

  getInfoFromPark = (parkData) => {
    this.setState({ currentPark: parkData })
  }

  handleClick = (event) => {
    console.log('HANDLE CLICK', event.target.id)
    let parkCode = event.target.id;
    getParkInfo(parkCode)
      .then(cleanedData => this.setState({ currentPark: cleanedData }))
      .catch(error => this.setState({ error: error }))

    getToiletInfo(parkCode)
      .then(data => this.setState({ parkToilets: [...data] }))
      .then(() => console.log('ADDED INFO', this.state))
      .catch(error => this.setState({ error: error }))
      
}
  // render() {
  //   return (
  //     <main className = 'app'>
  //       <Switch>
  //         <Route exact path='/' render={() => <Home getInfo={this.implementParkInfo}/>} />
  //         <Route exact path='/toilets' render={() => <ToiletTypes/>} />
  //         <Route exact path='/:parkroute/park' render={({ match }) => {
  //           return <Park parkName={match.params.parkroute} />
  //         }}/>
  //         <Route exact path='/:parkroute/park/info' render={({ match }) => <ParkFacts parkName={match.params.parkroute} />} />
  //         <Route exact path='/:parkroute/park/potties' render={( { match } ) => <ParkToilets parkName={match.params.parkroute}/>} />
  //         <Route exact path='/error' render={() => <Error/>} />
  //         <Redirect to='/error'/>
  //       </Switch>
  //     </main>
  //   )
  // }

  // if(!this.props.currentPark) {
  //   return (<Link to={`/${this.props.parkName}/park/`}>Please Select Your Park Here</Link>)

  render() {
    return (
      <main className='app'>
        <Switch>
          <Route exact path='/' render={() => <Home  getParkCode={this.getParkCode} handleClick={(event) => this.handleClick(event)}/>} />
          
          <Route exact path='/toilets' render={() => <ToiletTypes />} />
          
          <Route exact path={`/:${this.state.currentPark.parkCode}/park`} render={({ match }) => {
            return <Park getInfo={this.getInfoFromPark} currentPark={this.state.currentPark}/> }} />
          
          <Route exact path={`/:${this.state.currentPark.parkCode}/park/info`}>
              <ParkFacts parkName={this.state.currentPark.parkCode} currentPark={this.state.currentPark}/> 
          </Route>

          <Route exact path={`/:${this.state.currentPark.parkCode}/park/potties`}>
            <ParkToilets parkName={this.state.currentPark.parkCode} />
          </Route>
         

          <Route exact path='/error' render={() => <Error />} />

          <Redirect to='/error' />
        </Switch>
      </main>
    )
  }

};

export default App;

// render={({ match }) => 
//             {
//               let parkCode = this.state.currentPark.parkCode
//             console.log('MATCH')
//             console.log('STATE', this.state.currentPark.parkCode)
//             console.log('VARIABLE', parkCode)
//                    return <ParkToilets parkName={match.params.currentPark.parkCode} />
//                             }}
// render() {
//   return (
//     <main className='app'>
//       <Switch>
//         <Route exact path='/' render={() => <Home getParkCode={this.getParkCode} handleClick={(event) => this.handleClick(event)} />} />

//         <Route exact path='/toilets' render={() => <ToiletTypes />} />

//         <Route exact path='/:parkroute/park' render={({ match }) => {
//           return <Park parkName={match.params.parkroute} getInfo={this.getInfoFromPark} currentPark={this.state.currentPark} />
//         }} />

//         <Route exact path='/:parkroute/park/info' render={({ match }) => <ParkFacts parkName={match.params.parkroute} currentPark={this.state.currentPark} />} />

//         <Route exact path='/:parkroute/park/potties' render={({ match }) => <ParkToilets parkName={match.params.parkroute} />} />

//         <Route exact path='/error' render={() => <Error />} />

//         <Redirect to='/error' />
//       </Switch>
//     </main>
//   )
// }

// };

// export default App;
// Import librairies
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Axios from 'axios'

// Import components & screens
import Home from './screens/Home'

// Import components & screens
import Header from './components/Header'

// Import styles
import './App.css'

export default class App extends React.Component {

  state = {
    logosAreReady: false
  }

  componentDidMount() {
    Axios.get('./public_ressources/databases/logos.json')
      .then(res => res.data)
      .then(data => {
        this.setState({ logos: data, logosAreReady: true })
      })
  }

  render() {

    return (
      <div className="App" onLoad={console.log(this.state.logos)}>
        <Header logos={this.state.logosAreReady ? this.state.logos : ''} />

        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>
          
        </Switch>
      </div>
    )
  }
}
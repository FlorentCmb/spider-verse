// Import librairies
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Import components & screens
import Home from './screens/Home'

// Import components & screens
import Header from './components/Header'

// Import styles
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>
          
        </Switch>
      </div>
    )
  }
}
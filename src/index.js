// Import librairies
import React from 'react'
import ReactDOM from 'react-dom'

// Import components & screens
import App from './App'
import { BrowserRouter } from 'react-router-dom'

// Import styles
import './index.css'

// Misc imports
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))

serviceWorker.register()
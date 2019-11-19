// Import librairies
import React from 'react'
import ReactDOM from 'react-dom'

// Import components & screens
import App from './App'

// Import styles
import './index.css'

// Misc imports
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
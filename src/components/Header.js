// Import libraires
import React from 'react'
import { Link } from 'react-router-dom'

// Import styles
import './Header.css'

export default class Header extends React.Component {

    render() {

        return(
            <div className="Header">
                <img className="Logo" src={this.props.logos.length > 0 ? this.props.logos[1].url : ''} alt="Logo" />
                <Link to='/'>HOME</Link>
                <Link to='/'>LIST</Link>
            </div>
        )
    }
}
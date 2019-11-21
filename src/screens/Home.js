// Import librairies
import React from 'react'

// Import styles
import './Home.css'

export default class Home extends React.Component {

    render() {

        return(
            <div className="Home">
                Banner
                <div className="Home-Article">
                    <h3 className="Home-Title">WHO IS HE ?</h3>
                    <p className="Home-Text">Originally born in 1962 by Stan Lee and Steve Ditko, Peter Parker is the most famous Spider-Man. Let's remind us his life...</p>
                    <p className="Home-Text">At the age of 6, his parents (who both work for government) are killed. He's raised by his uncle and his aunt. He grew up, and, while he was a student, he got bitten by a radioactive spider. This incident gave him incredible powers, similar to a spider. He became able to climb walls, to weave webs. His strength and his agility were upgraded too. </p>
                    <p className="Home-Text">But there's other "Spider-Men", from different universes and with different abilities.</p>
                </div>
            </div>
        )
    }
}
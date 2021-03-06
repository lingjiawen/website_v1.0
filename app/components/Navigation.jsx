import React from 'react'
import ContactMe from './Nav/ContactMe.jsx'
import Exercitation from './Nav/Exercitation.jsx'
import AboutMe from './Nav/AboutMe.jsx'
import Resume from './Nav/Resume.jsx'

function Img(props) {
    return <img src={require('../../images/navigate.png')} alt="navigate_img"/>
}

class Navigation extends React.Component {
    render() {
        return (
            <div id="navigation">
                <Img/>
                <ul>
                    <li>
                        <a href="#take-me-home" className="nav-active"><span>Take Me Home</span></a>
                    </li>
                    <li>
                        <AboutMe/>
                    </li>
                    <li>
                        <Exercitation/>
                    </li>
                    <li>
                        <Resume />
                    </li>
                    <li>
                        <ContactMe/>
                    </li>

                </ul>
            </div>
        );
    }
}

export default Navigation
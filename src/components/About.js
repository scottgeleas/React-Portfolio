import React from 'react';
import avatar from '../icons/avatar.png';

function About(props) {
    return (
        <div className="aboutContainer">
            <h2>About</h2>
            <img src={avatar} alt="grey alien avatar"/>
            <p>about me section text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text </p>
        </div>
    );
}

export default About;
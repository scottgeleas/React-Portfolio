import React from 'react';
import avatar from '../icons/avatar.png';

function About(props) {
    return (
        <div class="aboutContainer">
            <h2>About</h2>
            <img src={avatar} />
            <p>This is the about me description thiungs text are apice deal</p>
        </div>
    );
}

export default About;
import React from 'react';
import resume from '../images/budgetTracker.png';

function Resume(props) {
    return (
        <div>
            <a href={resume} download> Download CV</a>
        </div>
    );
}

export default Resume;
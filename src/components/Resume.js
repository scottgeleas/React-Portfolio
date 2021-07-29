import React from "react";
import resume from "../images/budget.png";

function Resume(props) {
    return (
        <div className="resume">
            <h2>Resume</h2>
            <div>
                <a href={resume} download>
                    Download CV
                </a>
                <ul>
                    <h3>Front-End Skills</h3>
                    <li></li>
                </ul>
                <ul>
                    <h3>Back End Skills</h3>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;

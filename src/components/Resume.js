import React from "react";
import resume from "../images/budget.png";

function Resume(props) {
    return (
        <div className="resume">
            <h2>Resume</h2>
            <div className="skills">
                <div className="download">
                    <a href={resume} download>
                        Download CV
                    </a>
                    </div>
                    <div className="lists">
                    <ul>
                        <h3>Front-End Skills</h3>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>React.js</li>
                        <li>Bootstrap</li>
                        <li>Handlebars.js</li>
                        <li>Webpack</li>
                        <li>Local &amp; Session Storage</li>
                        <li>IndexedDB</li>
                    </ul>
                    <ul>
                        <h3>Technologies</h3>
                        <li>Git</li>
                        <li>Heroku</li>
                        <li>Insomnia</li>
                        <li>MySQL Workbench</li>
                        <li>Robo 3T</li>
                        <li>MongoDB Atlas</li>
                        <li>Visual Studio Code</li>
                        <li>Windows</li>
                    </ul>
                    <ul>
                        <h3>Back-End Skills</h3>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>SQL</li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>GraphQL</li>
                        <li>Regex</li>
                    </ul>
                    </div>
            </div>
        </div>
    );
}

export default Resume;

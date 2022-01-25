import React from 'react';
import resume from '../resume/Scott-Geleas-Resume.pdf';

function Resume() {
    return (
        <div className='resume'>
            <h2>Proficiencies</h2>
            <div className='skills'>
                <div className='lists'>
                    <ul>
                        <h3>Front-End Skills</h3>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>jQuery</li>
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
                        <li>Jest</li>
                        <li>Insomnia</li>
                        <li>MySQL Workbench</li>
                        <li>MongoDB Compass</li>
                        <li>MongoDB Atlas</li>
                        <li>Visual Studio Code</li>
                        <li>MacOS</li>
                        <li>Windows</li>
                    </ul>
                    <ul>
                        <h3>Back-End Skills</h3>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>GraphQL</li>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Regex</li>
                    </ul>
                </div>
                <div className='download'>
                    <a href={resume} download>
                        Download CV ↯
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Resume;

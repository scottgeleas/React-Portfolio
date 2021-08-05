import React from 'react';
import avatar from '../icons/avatar.png';
import Card from 'react-bootstrap/Card';

function About() {
    return (
        <div className='about'>
            <h2>About Me</h2>
            <div className='bio'>
                <div className='avatar'>
                    <img src={avatar} alt='grey alien avatar' />
                </div>
                <Card className='aboutBody'>
                    <Card.Body>
                        <div className='aboutBio'>
                            Hello, and welcome! My name is Scott Geleas, and I'm
                            a Web Developer raised in New Hampshire. I love
                            learning new things everyday. My main focus is
                            creating engaging and robust web applications with
                            JavaScript. I am comfortable working on the front or
                            back-end. I have experience with SQL and NoSQL
                            databases. Although I know how to use Handlebars, I
                            prefer to use React when building new applications
                            for efficiency and user experience. I am a team
                            player who enjoys being able to give assistance in
                            any way I can to keep the project moving forward.
                            Currently looking for new opportunities to improve
                            my knowledge and extend my coding horizon.
                        </div>
                        <blockquote className='blockquote'>
                            <p>
                                “The important thing is not to stop questioning.
                                Curiosity has its own reason for existing.”
                            </p>
                            ― Albert Einstein
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default About;

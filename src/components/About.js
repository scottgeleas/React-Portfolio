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
                            a Junior Web Developer raised in New Hampshire. I
                            enjoy camping and the outdoors. During the summer I
                            go on many camping trips. I also love going to rock
                            concerts with my friends. I adore animals, and once
                            had a turkey friend that used to visit me every day.
                            I've had all kinds of pets, including birds, dogs,
                            cats, fish, squirrels, guinea pigs, and hermit
                            crabs. Currently I'm looking to further my knowledge
                            of Front-End Web Development. I enjoy learning new
                            things everyday, like figuring out how to get those
                            planets to spin! Feel free to message me anytime
                            with questions, or if you would like to collaborate
                            on something.
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

import React from "react";
import avatar from "../icons/avatar.png";
import Card from "react-bootstrap/Card";

function About(props) {
    return (
        <div className="about">
            <h2>About</h2>
            <div className="bio">
                <div className="avatar">
                    <img src={avatar} alt="grey alien avatar" />
                </div>
                <Card className="aboutBody">
                    <Card.Body>
                        Hello, and welcome! Myy name is Scott Geleas, and I'm a
                        Junior Web Developer raised in New Hampshire. I enjoy
                        camping and the outdoors. During the summer I go on many
                        camping trips. I also love going to rock concerts with
                        my friends. I adore animals, and once had a turkey
                        friend that used to visit me every day. I've had all
                        kinds of pets, including birds, dogs, cats, fish,
                        squirrels, guinea pigs, and hermit crabs. Currently
                        looking to further my knowledge of Front-End Development
                        while continuing to educate myself.
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default About;

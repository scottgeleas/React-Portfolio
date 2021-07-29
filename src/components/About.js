import React from "react";
import avatar from "../icons/avatar.png";
import Card from "react-bootstrap/Card";

function About(props) {
    return (
        <div className="about">
            <h2>About</h2>
            <div className="bio">
                <img src={avatar} alt="grey alien avatar" />
                <Card>
                    <Card.Body>
                        about me section text text text text text text text text
                        text text text text text text text text text text text
                        text text text text text text text text text text text
                        text text text
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default About;

import React from "react";
import Card from "react-bootstrap/Card";
import githubIcon from '../icons/github.png';
import deployIcon from '../icons/deploy.png';

function Project(props) {
    return (
        <div className="project">
            <Card style={{ width: "100%" }}>
                <Card.Img
                    className="projectImage"
                    style={{ backgroundImage: `url(${props.image})` }}
                />

                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <div className="projectIcons">
                    <Card.Text>
                        <a href={props.github}><img src={githubIcon} className="icon"/></a>
                    </Card.Text>
                    <Card.Text>
                        <a href={props.deploy}><img src={deployIcon} className="icon"/></a>
                    </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Project;

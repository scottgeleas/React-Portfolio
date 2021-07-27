import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Project(props) {
    return (
        <div className="project">
            <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={props.image}/>
                <Card.Body className="projectImage" style={{backgroundImage: `url(${props.image})`}}>
                    
                </Card.Body>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Project;


import React from "react";
import resume from "../images/budgetTracker.png";
import ListGroup  from "react-bootstrap/ListGroup";

function Resume(props) {
    return (
        <div className="resume">
            <div className="download">
                <a href={resume} download>
                    Download CV
                </a>
            </div>
            <ListGroup>
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
        </div>
    );
}

export default Resume;

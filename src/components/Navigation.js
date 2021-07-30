import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation(props) {
    return (
        <Navbar className="navbar" bg="dark" variant="dark" expand="md">
            <Navbar.Brand className="name">Scott Geleas</Navbar.Brand>
            <Navbar.Toggle
                className="link"
                aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="links">
                    <Nav.Link
                        className="link"
                        onClick={() => {
                            props.setCurrentPage("About");
                        }}>
                        About
                    </Nav.Link>
                    <Nav.Link
                        className="link"
                        onClick={() => {
                            props.setCurrentPage("Portfolio");
                        }}>
                        Portfolio
                    </Nav.Link>
                    <Nav.Link
                        className="link"
                        onClick={() => {
                            props.setCurrentPage("Contact");
                        }}>
                        Contact
                    </Nav.Link>
                    <Nav.Link
                        className="link"
                        onClick={() => {
                            props.setCurrentPage("Resume");
                        }}>
                        Resume
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;

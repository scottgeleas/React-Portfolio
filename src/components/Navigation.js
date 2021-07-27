import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';



function Navigation(props) {
    return (
        <Navbar bg="primary" variant="dark">
        <Container className="navbar">
        <Navbar.Brand className="me-auto">Scott Geleas</Navbar.Brand>
        <Nav className="s">
          <Nav.Link className="navLink ms-auto" onClick={()=> {props.setCurrentPage('About')}}>About</Nav.Link>
          <Nav.Link className="navLink ms-auto" onClick={()=> {props.setCurrentPage('Portfolio')}}>Portfolio</Nav.Link>
          <Nav.Link className="navLink ms-auto" onClick={()=> {props.setCurrentPage('Contact')}}>Contact</Nav.Link>
          <Nav.Link className="navLink ms-auto" onClick={()=> {props.setCurrentPage('Resume')}}>Resume</Nav.Link>
        
        </Nav>
        </Container>
        </Navbar> 
    );
}

export default Navigation;
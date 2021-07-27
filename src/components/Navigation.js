import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';



function Navigation(props) {
    return (
        <Navbar className="navbar" bg="primary" variant="dark">
        <Container>
        <Navbar.Brand>Scott Geleas</Navbar.Brand>
        <Nav>
          <Nav.Link className="ms-auto" onClick={()=> {props.setCurrentPage('About')}}>About</Nav.Link>
          <Nav.Link className="ms-auto" onClick={()=> {props.setCurrentPage('Portfolio')}}>Portfolio</Nav.Link>
          <Nav.Link className="ms-auto" onClick={()=> {props.setCurrentPage('Contact')}}>Contact</Nav.Link>
          <Nav.Link className="ms-auto" onClick={()=> {props.setCurrentPage('Resume')}}>Resume</Nav.Link>
        
        </Nav>
        </Container>
        </Navbar> 
    );
}

export default Navigation;

//  <Navbar bg="primary" variant="dark">
// <Container>
// <Navbar.Brand>Scott Geleas</Navbar.Brand>
// <Nav className="me-auto">
//   <Nav.Link onClick={()=> {props.setCurrentPage('About')}}>About</Nav.Link>
//   <Nav.Link onClick={()=> {props.setCurrentPage('Portfolio')}}>Portfolio</Nav.Link>
//   <Nav.Link onClick={()=> {props.setCurrentPage('Contact')}}>Contact</Nav.Link>
//   <Nav.Link onClick={()=> {props.setCurrentPage('Resume')}}>Resume</Nav.Link>

// </Nav>
// </Container>
// </Navbar> 

// <div className="navbar">
//             <ul>
//                 <li onClick={()=> {props.setCurrentPage('About')}}>About</li>
//                 <li onClick={()=> {props.setCurrentPage('Portfolio')}}>Portfolio</li>
//                 <li onClick={()=> {props.setCurrentPage('Contact')}}>Contact</li>
//                 <li onClick={()=> {props.setCurrentPage('Resume')}}>Resume</li>
//             </ul>
//         </div>
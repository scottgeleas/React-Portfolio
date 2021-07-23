import React from 'react';

function Navbar(props) {
    return (
        <div>
            <ul>
                <li onClick={()=> {props.setCurrentPage('About')}}>About</li>
                <li onClick={()=> {props.setCurrentPage('Portfolio')}}>Portfolio</li>
                <li onClick={()=> {props.setCurrentPage('Contact')}}>Contact</li>
                <li onClick={()=> {props.setCurrentPage('Resume')}}>Resume</li>
            </ul>
        </div>
    );
}

export default Navbar;
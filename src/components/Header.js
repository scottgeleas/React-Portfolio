import React from 'react';
import Navbar from './Navbar';

function Header(props) {
    return (
        <div>
            <h1>Scott Geleas</h1>
            <Navbar setCurrentPage = {props.setCurrentPage}/>
        </div>
    );
}

export default Header;
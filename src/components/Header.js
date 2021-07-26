import React from "react";
import Navbar from "./Navbar";

function Header(props) {
    return (
        <div class="header">
            <div class="scott">
                <h1>Scott Geleas</h1>
            </div>

            <Navbar setCurrentPage={props.setCurrentPage} />
        </div>
    );
}

export default Header;

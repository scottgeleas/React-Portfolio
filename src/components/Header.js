import React from "react";
import Navigation from "./Navigation";

function Header(props) {
    return (
        <div>
            <div className="hero"></div>
            <Navigation setCurrentPage={props.setCurrentPage} />
        </div>
    );
}

export default Header;

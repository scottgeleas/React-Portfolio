import React from "react";
import Navigation from "./Navigation";

function Header(props) {
    return (
        <div className="header">
            <Navigation setCurrentPage={props.setCurrentPage} />
        </div>
    );
}

export default Header;

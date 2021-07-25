import React from "react";
import github from "../icons/github64px.png";
import linkedin from "../icons/linkedin64px.png";
import stack from "../icons/stack64px.png";

function Footer() {
    return (
        <div>
            <a href="https://github.com/scottgeleas">
                <img src={github} />
            </a>
            <a href="https://www.linkedin.com/in/scottgeleas/">
                <img src={linkedin} />
            </a>
            <a href="https://stackoverflow.com/users/14795964/scott-geleas">
                <img src={stack} />
            </a>
        </div>
    );
}

export default Footer;

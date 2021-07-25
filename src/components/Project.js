import React from 'react';

function Project(props) {
    return (
        <div>
            <h2>Projects</h2>
            <h3>{props.title}</h3>
            <p>project desription</p>
        </div>
    );
}

export default Project;
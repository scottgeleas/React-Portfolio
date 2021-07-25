import React from "react";
import Project from "./Project";

function Portfolio(props) {
    const Projects = [
        {
            title: "project 1",
        },
        {
            title: "project 2",
        },
    ];

    return (
        <div>
            {Projects.map((projectData) => {
                return <Project 
                title={projectData.title} 
                description={projectData.description} />;
            })}
        </div>
    );
}

export default Portfolio;

import React from "react";
import Project from "./Project";
import budgetImage from '../images/budgetTracker.png';

function Portfolio(props) {
    const Projects = [
        {
            title: "project 1",
            image: budgetImage
        },
        {
            title: "project 2",
        },
        {
            title: "project 2",
        },
        {
            title: "project 2",
        },
        {
            title: "project 2",
        },
        {
            title: "project 2",
        },
    ];

    return (
        <div className="portfolioHeader">
            <h2>Projects</h2>
        <div className="projectContainer">
            {Projects.map((projectData) => {
                return <Project 
                title={projectData.title} 
                description={projectData.description}
                image={projectData.image} />;
            })}
        </div>
        </div>
    );
}

export default Portfolio;

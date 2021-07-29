import React from "react";
import Project from "./Project";
import budget from "../images/budget.png";
import mongoose from "../images/mongoose.png";

function Portfolio(props) {
    const Projects = [
        {
            title: "Progressive Budget Tracker",
            description: "A PWA that lets users insert deposits and expenses while showing your your balance over time. ",
            image: budget,
            github: "https://github.com/scottgeleas/Progressive-Budget-Tracker",
            deploy: "https://progressive-budget-tracker-sjg.herokuapp.com/",
        },
        {
            title: "Healthy Mongoose",
            description:
                "A web app that allows users to keep track of their fitness goals",
            image: mongoose,
            github: "https://github.com/scottgeleas/Healthy-Mongoose",
            deploy: "https://healthy-mongoose.herokuapp.com/",
        },
        {
            title: "Healthy Mongoose",
            description:
                "A web app that allows users to keep track of their fitness goals",
            image: mongoose,
            github: "https://github.com/scottgeleas/Healthy-Mongoose",
            deploy: "https://healthy-mongoose.herokuapp.com/",
        },
        {
            title: "Healthy Mongoose",
            description:
                "A web app that allows users to keep track of their fitness goals",
            image: mongoose,
            github: "https://github.com/scottgeleas/Healthy-Mongoose",
            deploy: "https://healthy-mongoose.herokuapp.com/",
        },
        {
            title: "Healthy Mongoose",
            description:
                "A web app that allows users to keep track of their fitness goals",
            image: mongoose,
            github: "https://github.com/scottgeleas/Healthy-Mongoose",
            deploy: "https://healthy-mongoose.herokuapp.com/",
        },
        {
            title: "Healthy Mongoose",
            description:
                "A web app that allows users to keep track of their fitness goals",
            image: mongoose,
            github: "https://github.com/scottgeleas/Healthy-Mongoose",
            deploy: "https://healthy-mongoose.herokuapp.com/",
        },
    ];

    return (
        <div className="portfolio">
            <h2>Projects</h2>
            <div className="projectContainer">
                {Projects.map((projectData) => {
                    return (
                        <Project
                            title={projectData.title}
                            description={projectData.description}
                            image={projectData.image}
                            github={projectData.github}
                            deploy={projectData.deploy}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Portfolio;

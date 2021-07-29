import React from "react";
import Project from "./Project";
import restful from "../images/restful.png";
import reciflixor from "../images/reciflixor.png";
import mongoose from "../images/mongoose.png";
import note from "../images/note.png";
import firstPort from "../images/portfolio.png";
import budget from "../images/budget.png";
import comingSoon from "../images/coming-soon.jpg";

function Portfolio(props) {
    const Projects = [
        {
            title: "Restful Cabin Retreats",
            description:
                "A collaborative website using MongoDB and Mongoose to let users reserve a cabin from around the world.",
            image: restful,
            github: "https://github.com/scottgeleas/Restful-Cabin-Retreats",
            deploy: "https://restful-cabin-retreats-sjg.herokuapp.com/",
        },
        {
            title: "Reciflixor",
            description:
                "An application where movie lovers can select a movie and enjoy a recipe from that movie to experience the world the directors created.",
            image: reciflixor,
            github: "https://github.com/UNH-Bootcamp-Projects/project-1-group-a",
            deploy: "https://unh-bootcamp-projects.github.io/project-1-group-a/",
        }, 
        {
            title: "Healthy Mongoose",
            description:
                "A web app that allows users to keep track of their fitness goals. Users input workout type, duration and/or weight lifted. After they are presented with their total workout time for the past seven days.",
            image: mongoose,
            github: "https://github.com/scottgeleas/Healthy-Mongoose",
            deploy: "https://healthy-mongoose.herokuapp.com/",
        },
        {
            title: "Note Taker",
            description:
                "A simple application allowing users to create notes. Simply type a note, give it a title, and add it with the + button.",
            image: note,
            github: "https://github.com/scottgeleas/Note-Taker",
            deploy: "https://note-taker-sjg.herokuapp.com/",
        },
        {
            title: "My First Portfolio",
            description:
                "This was the first portfolio I made back when I started learning web development. A lot of challenges were overcome with this project, and the knowledge I've acquired from creating this myself is priceless",
            image: firstPort,
            github: "https://github.com/scottgeleas/Portfolio",
            deploy: "https://scottgeleas.github.io/Portfolio/",
        },
        {
            title: "Progressive Budget Tracker",
            description: "A PWA that lets users insert deposits and expenses even when offline. After each input the graph updates to show the users balance over time.",
            image: budget,
            github: "https://github.com/scottgeleas/Progressive-Budget-Tracker",
            deploy: "https://progressive-budget-tracker-sjg.herokuapp.com/",
        },
        {
            title: "Coming Soon!",
            description:
                "This project is currently in development. Please check back soon.",
            image: comingSoon,
            github: "",
            deploy: "",
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

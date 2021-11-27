import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Project from './Project';
import restful from '../images/restful.png';
import book from '../images/book.png';
import mongoose from '../images/mongoose.png';
import reciflixor from '../images/reciflixor.png';
import br from '../images/break.png';
import note from '../images/note.png';
import budget from '../images/budget.png';
import firstPort from '../images/portfolio.png';
import comingSoon from '../images/coming-soon.jpg';

function Portfolio() {
    const [projectsShown, setProjectsShown] = useState(4);

    const Projects = [
        {
            title: 'Restful Cabin Retreats',
            description:
                'A collaborative website using SQL and Sequelize to let users reserve a cabin from around the world.',
            image: restful,
            github: 'https://github.com/scottgeleas/Restful-Cabin-Retreats',
            deploy: 'https://restful-cabin-retreats-sjg.herokuapp.com/',
        },
        {
            title: 'Book Search',
            description:
                'An application that takes advantage of GraphQL and the Google Books API that allows users to search and save books to keep track of what they want to read.',
            image: book,
            github: 'https://github.com/scottgeleas/Book-Search',
            deploy: 'https://book-search-sjg.herokuapp.com/',
        },
        {
            title: 'Healthy Mongoose',
            description:
                'A web app that allows users to keep track of their fitness goals. Users input workout type, duration and/or weight lifted. After they are presented with their total workout time for the past seven days.',
            image: mongoose,
            github: 'https://github.com/scottgeleas/Healthy-Mongoose',
            deploy: 'https://healthy-mongoose.herokuapp.com/',
        },
        {
            title: 'Reciflixor',
            description:
                'An application where movie lovers can select a movie and enjoy a recipe from that movie to experience the world the directors created.',
            image: reciflixor,
            github: 'https://github.com/scottgeleas/Reciflixor',
            deploy: 'https://scottgeleas.github.io/Reciflixor/',
        },
        {
            title: 'Code Break',
            description:
                'A website that lets users save their favorite code snippets, and see snippets that other users have created. Created with React and GraphQL.',
            image: br,
            github: 'https://github.com/scottgeleas/Code-Break',
            deploy: 'https://code-br.herokuapp.com/',
        },
        {
            title: 'Note Taker',
            description:
                'A simple application allowing users to create notes. Simply type a note, give it a title, and add it with the + button.',
            image: note,
            github: 'https://github.com/scottgeleas/Note-Taker',
            deploy: 'https://note-taker-sjg.herokuapp.com/',
        },
        {
            title: 'Progressive Budget Tracker',
            description:
                'A PWA that lets users insert deposits and expenses even when offline. After each input the graph updates to show the users balance over time. After coming online, the data is then sent to the database.',
            image: budget,
            github: 'https://github.com/scottgeleas/Progressive-Budget-Tracker',
            deploy: 'https://progressive-budget-tracker-sjg.herokuapp.com/',
        },
        {
            title: 'My First Portfolio',
            description:
                'This was the first portfolio I made back when I started learning web development. A lot of challenges were overcome with this project, and the knowledge I have acquired from creating this myself is priceless.',
            image: firstPort,
            github: 'https://github.com/scottgeleas/Portfolio',
            deploy: 'https://scottgeleas.github.io/Portfolio/',
        },
        {
            title: 'Coming Soon!',
            description:
                'This project is currently in development. Please check back soon.',
            image: comingSoon,
            github: '',
            deploy: '',
        },
    ];

    const mappedProjects = () => {
        return Projects.slice(0, projectsShown).map((projectData) => (
            <Project
                title={projectData.title}
                description={projectData.description}
                image={projectData.image}
                github={projectData.github}
                deploy={projectData.deploy}
            />
        ));
    };

    const handleMore = () => {
        if (projectsShown > Projects.length) {
            setProjectsShown(4);
        } else {
            setProjectsShown(projectsShown + 4);
        }
    };

    return (
        <div className='portfolio'>
            <h2>Projects</h2>
            <div className='projects-and-btn'>
                <div className='projectContainer'>
                    {mappedProjects(Projects)}
                </div>
                <Button variant='outline-light' onClick={handleMore}>
                    {projectsShown > Projects.length
                        ? 'Show Less'
                        : 'Show More'}
                </Button>
            </div>
        </div>
    );
}

export default Portfolio;

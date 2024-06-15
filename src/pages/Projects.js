import React from 'react';
import AnimatedHeading from '../components/AnimatedHeading';
import ParticlesBackground from '../components/ParticlesBackground';

function Projects() {
  const projectList = [
    { title: 'Autism Spectrum Disorder detection system', description: 'Machine learning model to detect Autism Spectrum Disorder in children, using audio recordings.', githubLink: 'https://github.com/ronit1706/Autism-Detection' },
    { title: 'Full Stack Chat Website', description: 'Complete frontend and backend of the website using MERN stack.', githubLink: '' },
    { title: 'Uniclean: Sanitation management system for the campus', description: 'A complete system for reporting any complaints regarding cleanliness in the campus made in C++.', githubLink: 'https://github.com/Akkkshattt-Sharrrmaaa/Uni-Clean' },
    { title: 'Self Portfolio Website', description: 'Complete website for my portfolio to show my achievements and skills, made using React.', githubLink: '' },
    { title: '2048 game', description: 'Fully working 2048 game using Tkinter library in Python.', githubLink: '' },
    { title: 'Voice to animation using AI', description: 'Used AI libraries to convert voice into text, and then the text to a complete animation during Intel AI for Youth Program.', githubLink: '' },
  ];

  return (
    <>
    <ParticlesBackground />
    <div className='page-hero'>
    <div>
      <AnimatedHeading text = "Projects"/>
    </div>
    <div className="projects page" id="projects">
      
      {projectList.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      ))}
    </div>
    </div>
    </>
  );
}

export default Projects;

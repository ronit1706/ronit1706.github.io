import React from 'react';
import AnimatedHeading from '../components/AnimatedHeading';
import ParticlesBackground from '../components/ParticlesBackground';

function Certifications() {
  const projectList = [
    { title: 'Azure AI Engineer Associate', description: 'Microsoft', CLink: 'https://learn.microsoft.com/en-us/users/ronitkhurana-0539/credentials/62f9fa36a9c793e4?ref=https%3A%2F%2Fwww.linkedin.com%2F' },
    { title: 'Exploratory Data Analysis in Python', description: 'Datacamp', CLink: '' },
    { title: 'AI for Everyone', description: 'DeepLearning.ai, Coursera', CLink: 'https://www.coursera.org/account/accomplishments/records/7R2LNX9AGPCK' },
    { title: 'Google Cloud Big Data and Machine Learning Fundamentals', description: 'Google Cloud, Coursera', CLink: 'https://www.coursera.org/account/accomplishments/records/VZTTD87C2VW3' },
    

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
          <a href={project.CLink} target="_blank" rel="noopener noreferrer">Credential URL</a>
        </div>
      ))}
    </div>
    </div>
    </>
  );
}

export default Certifications;
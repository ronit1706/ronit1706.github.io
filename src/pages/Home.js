import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../components/ParticlesBackground';

function Home() {
  return (
    <>
      <ParticlesBackground />
      <div className="home">
        <div className="hero">
          <h1 className='hero-heading1'>HI;</h1>
          <h1 className='hero-heading2'>I'M RONIT KHURANA</h1>
          <p className='hero-subtitle'>Computer Science Student with a zeal for problem solving, constantly seeking opportunities to hone my skills</p>
          <div>
            <div className='hero-btns'>
              <Link to="/projects" className="btn">My Projects</Link>
              <Link to="/contact" className="btn-primary">Contact Me</Link>
            </div>
          </div>
          <div className='download-resume'>
            <a href="https://drive.google.com/uc?export=download&id=1sBAd7CMTCsIEhdBOHi56y6TkFiISo6qN" className="btn" download>Download Resume</a>
          </div>

          <div className="social-icons">
            <a href="https://github.com/ronit1706" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
            <a href="https://stackoverflow.com/users/25179271/ronit-khurana" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faStackOverflow} className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/ronit-khurana-03a483137/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

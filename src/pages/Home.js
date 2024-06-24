import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faStackOverflow, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie'; // Import react-lottie
import underlineAnimation from '../assets/underline.json'; // Import your underline.json file
import ParticlesBackground from '../components/ParticlesBackground';

function Home() {
  const [isStopped, setIsStopped] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStopped(false);
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);
  
  const underlineOptions = {
    loop: false,
    autoplay: false,
    animationData: underlineAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
      <ParticlesBackground />
      <div className="home">
        <div className="hero">
          <h1 className='hero-heading1'>HI;</h1>
          <div className='hero-heading2-container'>
            <h1 className='hero-heading2'>I'M RONIT KHURANA</h1>
            <div className="underline-animation">
              <Lottie options={underlineOptions} height={40} width={'100%'} isStopped = {isStopped} style={{visibility: isVisible ? 'visible' : 'hidden'}}/>
            </div>
          </div>
          <p className='hero-subtitle'>Computer Science Student with a zeal for problem solving, constantly seeking opportunities to hone my skills</p>
          <div>
            <div className='hero-btns'>
              <Link to="/projects" className="btn">My Projects</Link>
              <Link to="/contact" className="btn-primary">Contact Me</Link>
            </div>
          </div>
          <div className='download-resume'>
            <a href="https://drive.google.com/uc?export=download&id=156hVFU05Jpwnq5i5JhiTLN0m68GMPTJ8" className="btn" download>Download Resume</a>
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

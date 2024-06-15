import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedHeading from '../components/AnimatedHeading';
import ParticlesBackground from '../components/ParticlesBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const SoftSkills = () => {
  return (
    <>
      <ParticlesBackground />
      <div id="soft-skills" className="page-hero">
        <Link to="/about">
          <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
        </Link>
        <AnimatedHeading text="Soft Skills" />
        <div className="skills">
          <h3>Soft Skills</h3>
          <ul>
            <li>Problem Solving</li>
            <li>Creativity</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
            <li>Leadership</li>
            <li>Time Management</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SoftSkills;

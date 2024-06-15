import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedHeading from '../components/AnimatedHeading';
import ParticlesBackground from '../components/ParticlesBackground';

const SoftSkills = () => {
  return (
    <>
      <ParticlesBackground />
      <div id="soft-skills" className="page-hero">
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
        <Link to="/about" className="btn btn-back">Back</Link> {/* Add Back button */}
      </div>
    </>
  );
}

export default SoftSkills;

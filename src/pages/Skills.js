import React from 'react';
import { Link } from 'react-router-dom';
import SkillBar from '../components/SkillBar';
import AnimatedHeading from '../components/AnimatedHeading';
import ParticlesBackground from '../components/ParticlesBackground';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <>
      <ParticlesBackground />
      <div id="skills" className="page-hero">
        <Link to="/about">
          <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
        </Link>
        <AnimatedHeading text="Technical Skills" />
        <div className="skills-container">
          <SkillBar skill="C" level={4} />
          <SkillBar skill="C++" level={4} />
          <SkillBar skill="Python" level={5} />
          <SkillBar skill="Java" level={3} />
          <SkillBar skill="HTML & CSS" level={5} />
          <SkillBar skill="Javascript" level={4} />
          <SkillBar skill="React.js" level={3} />
          <SkillBar skill="MySQL" level={5} />
        </div>
      </div>
    </>
  );
}

export default Skills;

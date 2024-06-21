// src/pages/Contact.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import AnimatedHeading from '../components/AnimatedHeading';
import ParticlesBackground from '../components/ParticlesBackground';

function Contact() {
  return (
    <>
      <ParticlesBackground />
      <div id="contact" className="page-hero">
        <AnimatedHeading text="Contact Me" />
        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>Email: <a href="mailto:ronitkhurana391@gmail.com">ronitkhurana391@gmail.com</a></p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} />
            <p>Phone: <a href="tel:+919599452280">+91 9599452280</a></p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faLinkedin} />
            <p>LinkedIn: <a href="https://linkedin.com/in/ronit-khurana-03a483137" target="_blank" rel="noopener noreferrer">linkedin.com/in/ronit-khurana-03a483137</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

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
      <AnimatedHeading text= "Contact Me"/>
      <div className="contact-info">
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} />
          <i className="fas fa-envelope"></i>
          <p>Email: ronitkhurana391@gmail.com</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} />
          <i className="fas fa-phone"></i>
          <p>Phone: +91 9599452280</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faLinkedin} />
          <i className="fab fa-linkedin"></i>
          <p>LinkedIn: linkedin.com/in/ronit-khurana-03a483137</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;

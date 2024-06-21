import React from 'react';
import Experience from './Experience';
import AnimatedHeading from '../components/AnimatedHeading';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../components/ParticlesBackground';

function About() {
    return (
        <>
        <ParticlesBackground />
        <div className='page-hero' id="about">
        <div className='certifications'>
                        <Link to="/certifications" className="btn">Certifications</Link>
                    </div>
            <AnimatedHeading text="About Me" />
            <div className="about-sections">
                <div className='about-section'>
                    
                    <h1>Education</h1>
                    <p className='head'>University of Petroleum and Energy Studies</p>
                    <p>B.Tech(H) in Computer Science (Spl. AIML) 2021-2025 | GPA: 7.83</p>
                    <p className='head'>CBSE</p><br /><p>XII 2020-2021 | 90%</p>
                    <p className='head'>CBSE</p><br /><p>X 2018-2019 | 90.6%</p>
                    <br />
                    <h1>Interests</h1>
                    <p className='head'>Professional Interests:</p>
                    <ul>
                        <li>Artificial Intelligence & Machine Learning (AI & ML): Enthusiastic about exploring and developing innovative AI and ML solutions.</li>
                        <li>Computer Vision: Passionate about leveraging computer vision technologies to create impactful applications.</li>
                        <li>Internet of Things (IoT): Interested in the integration of IoT devices and systems to improve connectivity and efficiency.</li>
                    </ul>
                    <p className='head'>Personal Interests:</p>
                    <ul>
                        <li>Sketching and Illustration: Enjoy creating detailed sketches and exploring various artistic techniques.</li>
                        <li>Guitar Playing: Passionate about playing the guitar and experimenting with different genres of music.</li>
                        <li>Football: Active participant in local football games and enjoy the teamwork and physical activity involved.</li>
                    </ul>
                </div>
                <div className="about-section">
                    
                    <Experience />
                    <br />
                    <br />
                    <h1>Skills</h1>
                    <br />
                    <div className="skills-buttons">
                      <Link to="/skills" className="btn">Technical Skills</Link>
                      <Link to="/soft_skills" className="btn">Soft Skills</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;

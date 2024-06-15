// src/components/SkillBar.js
import React, { useEffect, useState } from 'react';

const SkillBar = ({ skill, level }) => {
    const [filled, setFilled] = useState(false);

    useEffect(() => {
        setTimeout(() => setFilled(true), 100); // Add a slight delay for the animation
    }, []);

    return (
        <div className="skill">
            <div className="skill-name">{skill}</div>
            <div className="skill-bar">
                <div
                    className={`skill-level ${filled ? 'filled' : ''}`}
                    style={{ width: `${level * 20}%` }}
                ></div>
            </div>
        </div>
    );
};

export default SkillBar;

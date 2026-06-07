import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faGears, faDesktop } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const gameDevSkills = [
    "C#", "Unity", "OOP", "SOLID", "Design Patterns"
];

const toolsSkills = [
    "Git", "Unity Profiler", "DOTween", "Zenject", "Spine"
];

const platformsSkills = [
    "Steam", "PC", "WebGL", "Яндекс Игры"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Skills & Tech Stack</h1>
                <div className="skills-grid">
                    
                    <div className="skill">
                        <FontAwesomeIcon icon={faGamepad} size="3x"/>
                        <h3>Unity Game Development</h3>
                        <p>2+ years of commercial experience. Built and shipped two complete games on Steam. Strong knowledge of game mechanics, combat systems, and economic simulation.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {gameDevSkills.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faGears} size="3x"/>
                        <h3>Tools & Optimization</h3>
                        <p>Experience with performance profiling, dependency injection, animations, and 2D skeletal animation. Write clean, maintainable, and scalable code.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {toolsSkills.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDesktop} size="3x"/>
                        <h3>Publishing & Platforms</h3>
                        <p>Full cycle of game development from concept to publishing. Experienced with Steam publishing and WebGL deployment.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {platformsSkills.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;
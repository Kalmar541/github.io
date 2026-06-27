import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faGears, faDesktop } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const gameDevSkills = [
    "C#", "Unity", "OOP", "SOLID", "Design Patterns"
];

const toolsSkills = [
    "Git", "Unity Profiler", "DOTween", "Zenject", "Spine", "UniTask"
];

const platformsSkills = [
    "PC", "Mobile", "WebGL", "Steam", "Google Play", "Yandex Games", "Itch.io"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Skills & Tech Stack</h1>
                <div className="skills-grid">

                    <div className="skill">
                        <FontAwesomeIcon icon={faGamepad} size="3x" />
                        <h3>Unity Game Development</h3>
                        <p>Over 3 years of commercial experience. Shipped multiple projects across PC,
                            Mobile, and WebGL. Strong expertise in game mechanics, combat systems,
                            AI, and economic simulation.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Core Technologies:</span>
                            {gameDevSkills.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faGears} size="3x" />
                        <h3>Tools & Optimization</h3>
                        <p>Proficient in performance profiling, dependency injection (Zenject),
                            tweening animations (DOTween), and 2D skeletal animation (Spine). Write clean,
                            maintainable, and scalable code using SOLID principles and design patterns</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tools & Libraries:</span>
                            {toolsSkills.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDesktop} size="3x"/>
                        <h3>Publishing & Platforms</h3>
                        <p>Full-cycle game development from concept to publishing.
                             Experienced with publishing on Steam, Google Play, and WebGL platforms.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Platforms:</span>
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
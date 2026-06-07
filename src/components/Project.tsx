import React from "react";
import booScreenshot from '../assets/images/Boo.jpg';
import laundryScreenshot from '../assets/images/Laundry.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>My Projects</h1>
            <div className="projects-grid">
                
                {/* Проект 1: Boo! - The Mystery Story */}
                <div className="project">
                    <a href="https://store.steampowered.com/app/1988980/Boo__The_Mystery_Story" target="_blank" rel="noreferrer">
                        <img src={booScreenshot} className="zoom" alt="Boo! The Mystery Story screenshot" width="100%" />
                    </a>
                    <a href="https://store.steampowered.com/app/1988980/Boo__The_Mystery_Story" target="_blank" rel="noreferrer">
                        <h2>Boo! The Mystery Story</h2>
                    </a>
                    <p>2.5D platformer with shoot 'em up elements and hardcore combat. Implemented a combat system with dozens of unique enemies and boss fights. Used Spine for 2D skeletal animations, dynamic location switching, and save system. Published on Steam.</p>
                </div>

                {/* Проект 2: Laundry Simulator */}
                <div className="project">
                    <a href="https://store.steampowered.com/app/3090890/Laundry_Simulator" target="_blank" rel="noreferrer">
                        <img src={laundryScreenshot} className="zoom" alt="Laundry Simulator screenshot" width="100%" />
                    </a>
                    <a href="https://store.steampowered.com/app/3090890/Laundry_Simulator" target="_blank" rel="noreferrer">
                        <h2>Laundry Simulator</h2>
                    </a>
                    <p>Management simulator where you run a laundry business. Built an economic system with variable customer needs, employee hiring and automation, upgrade system, and equipment management. Used Zenject (DI) and DOTween. Published working demo on Steam.</p>
                </div>

            </div>
        </div>
    );
}

export default Project;
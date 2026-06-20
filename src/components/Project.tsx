import React, { useState } from 'react';
import booScreenshot from '../assets/images/boo/boo-mini.jpg';
import laundryScreenshot from '../assets/images/laundry/laundry-mini.jpg';
import ProjectModal from './ProjectModal';
import '../assets/styles/Project.scss';

type ProjectType = {
  title: string;
  videoId: string | null;
  screenshots: string[];
  techStack: string;
  features: string[];
  fullDescription: string;
  platforms?: {name: string; url: string;}[];
};

function Project() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectsData = {
    boo: {
      headerColor: "rgb(55, 91, 62)",
      title: "Boo! The Mystery Story",
      videoId: "A8yQMC0N8xA",
      screenshots: [
          "/images/boo/screenshot1.jpg",
          "/images/boo/screenshot2.jpg",
          "/images/boo/screenshot3.jpg",
          "/images/boo/screenshot4.jpg"
      ],
      company: "Solvex Games",
      techStack: "Unity, C#, DoTween, Spine, Zenject",
      role: "Full-Cycle Developer (Gameplay, AI, Systems, Integration)",
      features: ["15 unique enemies with distinct attack patterns and behaviors",
                "3 challenging boss fights with multiple phases and mechanics",
                "Dynamic combat system combining platforming and shoot 'em up elements",
                "Save system for player progress, level unlocks, and game state",
                "2D skeletal animations using Spine for fluid character movement",
                "Seamless dynamic location switching with loading optimization",
                "Full Steam integration (cloud saves, Steamworks SDK)"],
      fullDescription: `Boo! The Mystery Story is a 2.5D platformer that blends fast-paced action with shoot 'em up mechanics. Players explore a hand-drawn world, battling a variety of unique enemies and epic bosses. I was responsible for designing and implementing the entire core combat loop, enemy AI, and the dynamic save system, ensuring a challenging and rewarding player experience. The project was built with a focus on clean, maintainable code using Zenject for dependency injection and Spine for high-quality 2D animations.`,
      platforms: [
      { name: "steam", url: "https://store.steampowered.com/app/1988980/Boo__The_Mystery_Story" }
    ]

    },
    laundry: {
      headerColor: "rgb(20 94 191)",
      title: "Laundry Simulator",
      videoId: "IeB0JWXotkc",
      screenshots: [
          "/images/laundry/laundry1.jpg",
          "/images/laundry/laundry2.jpg",
          "/images/laundry/laundry3.jpg",
          "/images/laundry/laundry4.jpg",
          "/images/laundry/laundry5.jpg",
          "/images/laundry/laundry6.jpg"
      ],
      techStack: "Unity, C#, DOTween",
      company: "Splash Games",
      role: "Junior → Middle Full-Cycle Developer (UI → Systems)",
      features: [
          "Complex economic systems including loans, invoicing, and dynamic pricing",
          "Interactive tablet UI for managing business operations and upgrades",
          "Decoration and equipment upgrade system",
          "NPC behavior system (customer satisfaction, employee automation)",
          "Resource management (money, supplies, equipment durability)",
          "Responsive UI with real-time feedback using DOTween"],
      fullDescription:
            `Laundry Simulator is a business management simulation where players run their own laundromat.
            I started this project as a Junior developer, focusing on UI and window systems.
            Over the course of development, I grew into a Middle-level developer, taking on increasingly complex systems: economic balancing, interactive tablet UI, invoicing system, decoration upgrades, and eventually refactoring and extending the NPC logic and core game loops. 
            This project was a major learning experience that shaped my approach to scalable architecture using Zenject, and taught me how to manage and extend complex systems in a live project.`,
      platforms: [
      { name: "steam", url: "https://store.steampowered.com/app/3090890/Laundry_Simulator" }
      /*,
      { name: "yandex", url: "https://yandex.ru/games/..." }*/
    ]
    }
  };

  const openModal = (projectKey: keyof typeof projectsData) => {
    setSelectedProject(projectsData[projectKey]);
    setIsModalOpen(true);
  };

  return (
    <div className="projects-container" id="projects">

      <h1>My Projects</h1>

      <div className="projects-grid">
        <div className="project">
          <img src={booScreenshot} alt="Boo! The Mystery Story" width="100%" className="zoom"
          onClick={() => openModal('boo')} 
          style={{ cursor: 'pointer' }}/>

          <h2 
          onClick={() => openModal('boo')} 
          style={{ cursor: 'pointer' }}> 
          Boo! The Mystery Story</h2>

          <p>2.5D platformer with elements of shoot 'em.</p>
          <p>This is a scary and mysterious story about how a city was attacked by plant monsters.</p>         
          
        </div>

        <div className="project">
          <img src={laundryScreenshot} alt="Laundry Simulator" width="100%" className="zoom"
          onClick={() => openModal('laundry')}
          style={{ cursor: 'pointer' }}/>

          <h2 
          onClick={() => openModal('laundry')} 
          style={{ cursor: 'pointer' }}>
          Laundry Simulator</h2>

          <p>Run your own laundry!</p>
          <p>Take over an abandoned laundry and try to gain the recognition of the town's residents!</p>
        </div>

      </div>
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject} />
    </div>
  );
}

export default Project;
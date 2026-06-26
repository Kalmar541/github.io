import React, { useState } from 'react';

import booScreenshot from '../assets/images/boo/boo-mini.jpg';
import laundryScreenshot from '../assets/images/laundry/laundry-mini.jpg';
import jellyCatsScreenshot from '../assets/images/jellyCats/jelly_Cats-mini.png';
import deliverItScreenshot from '../assets/images/deliverIt/deliver-it-mini.jpg';
import funnyMatchScreenshot from '../assets/images/funny-match/funny-match-mini.png';
import tetrocraftScreenshot from '../assets/images/tetrocraft/tetrocraft-mini.png';

import ProjectModal from './ProjectModal';
import '../assets/styles/Project.scss';

type ProjectType = {
  title: string;
  videoId: string | null;
  screenshots: string[];
  techStack: string;
  features: string[];
  fullDescription: string;
  platforms?: { name: string; url: string; }[];
};

function Project() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectsData =
  {

    /* -=BOO=- */
    boo:
    {
      headerColor: "rgb(55, 91, 62)",
      title: "Boo! The Mystery Story",
      videoId: "A8yQMC0N8xA",
      screenshots:
        [
          "/images/boo/screenshot1.jpg",
          "/images/boo/screenshot2.jpg",
          "/images/boo/screenshot3.jpg",
          "/images/boo/screenshot4.jpg"
        ],
      company: "Solvex Games",
      techStack: "Unity, C#, DoTween, Spine, Zenject",
      role: "Full-Cycle Developer (Gameplay, AI, Systems, Integration)",
      features:
        [
          "15 unique enemies with distinct attack patterns and behaviors",
          "3 challenging boss fights with multiple phases and mechanics",
          "Dynamic combat system combining platforming and shoot 'em up elements",
          "Save system for player progress, level unlocks, and game state",
          "2D skeletal animations using Spine for fluid character movement",
          "Seamless dynamic location switching with loading optimization",
          "Full Steam integration (cloud saves, Steamworks SDK)"
        ],
      fullDescription: `Boo! The Mystery Story is a 2.5D platformer that blends fast-paced action with shoot 'em up mechanics. Players explore a hand-drawn world, battling a variety of unique enemies and epic bosses. I was responsible for designing and implementing the entire core combat loop, enemy AI, and the dynamic save system, ensuring a challenging and rewarding player experience. The project was built with a focus on clean, maintainable code using Zenject for dependency injection and Spine for high-quality 2D animations.`,
      platforms:
        [
          { name: "steam", url: "https://store.steampowered.com/app/1988980/Boo__The_Mystery_Story" }
        ]
    },

    /* -=LAUNDRY=- */
    laundry:
    {
      headerColor: "rgb(20 94 191)",
      title: "Laundry Simulator",
      videoId: "IeB0JWXotkc",
      screenshots:
        [
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
      features:
        [
          "Complex economic systems including loans, invoicing, and dynamic pricing",
          "Interactive tablet UI for managing business operations and upgrades",
          "Decoration and equipment upgrade system",
          "NPC behavior system (customer satisfaction, employee automation)",
          "Resource management (money, supplies, equipment durability)",
          "Responsive UI with real-time feedback using DOTween"
        ],
      fullDescription:
        `Laundry Simulator is a business management simulation where players run their own laundromat.
        I started this project as a Junior developer, focusing on UI and window systems.
        Over the course of development, I grew into a Middle-level developer, taking on increasingly complex systems: economic balancing, interactive tablet UI, invoicing system, decoration upgrades, and eventually refactoring and extending the NPC logic and core game loops. 
        This project was a major learning experience that shaped my approach to scalable architecture using Zenject, and taught me how to manage and extend complex systems in a live project.`,
      platforms:
        [
          { name: "steam", url: "https://store.steampowered.com/app/3090890/Laundry_Simulator" }
          /*,
          { name: "yandex", url: "https://yandex.ru/games/..." }*/
        ]
    },

    /* -=JELLYCATS=- */
    jellyCats:
    {
      title: "Jelly Cats: Restaurant",
      videoId: "4CrxQZPbyWk",
      screenshots:
        [
          "/images/jellyCats/jelly-cats-screenshot1.png",
          "/images/jellyCats/jelly-cats-screenshot2.png",
          "/images/jellyCats/jelly-cats-screenshot3.png",
          "/images/jellyCats/jelly-cats-screenshot4.png"
        ],
      company: "Solvex Games",
      techStack: "Unity, C#, 2D Physics, Zenject",
      role: "Full-Cycle Mobile Developer (Gameplay, UI, Systems)",
      features:
        [
          "Merge-2 puzzle mechanics with physics-based interactions",
          "Idle restaurant management system with progression",
          "Meta-progression: unlock and upgrade cats between sessions",
          "Offline income and daily task systems",
          "Optimized for mobile devices (Android/iOS)"
        ],
      fullDescription: `Jelly Cats: Restaurant is a casual merge-2 puzzle game where players combine adorable jelly cats to build and manage their own restaurant. The game combines classic 2048-style mechanics with physics-based interactions and a deep idle progression system.
        I was responsible for full-cycle mobile development, including the merge gameplay, restaurant management systems, and progression mechanics. The project features a meta-game where cats become restaurant employees, continuing to earn income even when the player is offline, creating a rewarding idle loop.`,
      headerColor: "rgb(255 107 51)",
      platforms:
        [
          { name: "googleplay", url: "https://play.google.com/store/apps/details?id=com.solvex.jelly.cats" },
          { name: "web", url: "https://8games.net/merge-games/jelly-cats-restaurant.html" },
        ]
    },

    /* -=Deliver It=- */
    deliverIt:
    {
      title: "Deliver it!",
      videoId: null,
      coverImage: deliverItScreenshot,
      screenshots:
        [
          "/images/deliverIt/Screenshot1.png",
          "/images/deliverIt/Screenshot2.png",
          "/images/deliverIt/Screenshot3.png",
          "/images/deliverIt/Screenshot4.png",
          "/images/deliverIt/Screenshot5.png",
          "/images/deliverIt/Screenshot6.png"
        ],
      company: "Solvex Games",
      techStack: "Unity, C#, Zenject, State Machine, Physics",
      role: "Full-Cycle Developer (Gameplay, Systems, Refactoring)",
      features: [
        "Complete refactoring of legacy code into a clean, scalable architecture",
        "Complex multi-zone delivery management system (reception, packaging, warehouse, delivery)",
        "Order system with different item types (normal, fragile, dangerous) and weight mechanics",
        "Player progression: speed, carrying capacity, and load limits",
        "Sorting mechanic with color-based item classification",
        "Driving section with physics-based cargo that can be lost",
        "NPC queue system with order timers",
        "Upgrade system for the delivery point"
      ],
      fullDescription: `Deliver it! is a simulation/management game where players run their own delivery point. Customers bring packages, and the player must accept orders, sort items by type, package them, store them in the warehouse, and finally deliver them by driving through obstacle courses.
            I took over this project from a student developer, where it existed as a working prototype with legacy code. I was responsible for a complete codebase refactoring, implementing new systems (sorting, order queue, upgrades, driving physics), and bringing the prototype to a stable, polished state ready for release.
            The project features a multi-zone workflow: reception area with NPC queues, packaging zone with color-based sorting, warehouse for storage, and a delivery zone with a vehicle. Each order has a timer, and item types (normal, fragile, dangerous) affect gameplay through weight and handling mechanics.`,
      headerColor: "rgb(106 127 145)",
      platforms: []
    },

    /* ---=== Funny Match Master ===--- */
    funnyMatchMaster:
    {
      title: "Funny Match Master",
      videoId: null,
      coverImage: funnyMatchScreenshot,
      screenshots:
        [
          "/images/funny-match/screenshot1.png",
          "/images/funny-match/screenshot2.png",
          "/images/funny-match/screenshot3.png",
          "/images/funny-match/screenshot4.png"
        ],
      company: "Dmitry Chechilo",
      techStack: "Unity, C#, 2D, DOTween",
      role: "Full-Cycle Developer (Gameplay, UI, Progression)",
      features:
        [
          "Match-3 puzzle mechanics with colorful cartoon visuals",
          "Multiple item categories: fruits, vegetables, stationery, balls",
          "Level-based progression with increasing difficulty",
          "Timer-based challenge system with bonus rewards",
          "Boosters and upgrades to assist with sorting",
          "Optimized for mobile platforms (swipe controls)"
        ],
      fullDescription: `Funny Match Master is a casual match-3 puzzle game where players sort colorful objects into groups of three. The game features a delightful cartoon art style with a variety of items, including fruits, vegetables, stationery, and playful objects.
            I was responsible for full-cycle development, including the core match-3 mechanics, level progression, timer system, and UI. The project emphasizes accessible gameplay for mobile devices, with intuitive swipe controls and smooth animations using DOTween. Boosters and upgrades provide strategic depth, making each level an engaging experience.`,
      steamUrl: null,
      headerColor: "rgb(249 127 40)",
      platforms: []
    },

    /* ---=== Tetrocraft ===--- */
    tetrocraft: {
      title: "Tetrocraft",
      videoId: "l1eUl06kA6U",
      coverImage: tetrocraftScreenshot,
      screenshots:
        [
          "/images/tetracraft/Screenshot1.png",
          "/images/tetracraft/Screenshot2.png",
          "/images/tetracraft/Screenshot3.png",
          "/images/tetracraft/Screenshot4.jpg"
        ],
      company: "Dmitry Chechilo",
      techStack: "Unity, C#",
      role: "Full-Cycle Developer (Gameplay, UI)",
      features:
        [
          "Classic block-stacking puzzle mechanics",
          "Minecraft-inspired pixel-art visual style",
          "Single 'Cave' location with obsidian-like frame",
          "Several visually distinct block types",
          "Complete game loop with responsive controls"
        ],
      fullDescription: `Tetrocraft is a puzzle prototype I developed as one of my early experiments with Unity. It combines the classic block-stacking mechanics of Tetris with the distinctive blocky, pixel-art visual style inspired by games like Minecraft.
        The action takes place in a single "Cave" location, featuring a custom playing field framed in an obsidian-like style. The prototype includes several visually distinct block types, demonstrating a variety of textures and colors within the core puzzle loop.
        This project was a significant milestone in my learning journey as a game developer. It helped me gain a solid understanding of core game loops, input handling, and creating a polished user interface.`,
      headerColor: "rgb(80, 50, 150)",
      platforms: []
    },



  };

  const openModal = (projectKey: keyof typeof projectsData) => {
    setSelectedProject(projectsData[projectKey]);
    setIsModalOpen(true);
  };
  return (
    <div className="projects-container" id="projects">

      <h1>My Projects</h1>
      <div className="projects-grid">

        {/*Boo*/}
        <div className="project">

          <img src={booScreenshot} alt="Boo! The Mystery Story" width="100%" className="zoom"
            onClick={() => openModal('boo')}
            style={{ cursor: 'pointer' }} />

          <h2 onClick={() => openModal('boo')} style={{ cursor: 'pointer' }}>
            Boo! The Mystery Story
          </h2>

          <p>2.5D platformer with elements of shoot 'em.</p>
          <p>This is a scary and mysterious story about how a city was attacked by plant monsters.</p>
        </div>

        {/*Laundry Simulator*/}
        <div className="project">
          <img
            src={laundryScreenshot}
            alt="Laundry Simulator"
            width="100%"
            className="zoom"
            onClick={() => openModal('laundry')}
            style={{ cursor: 'pointer' }}
          />

          <h2 onClick={() => openModal('laundry')} style={{ cursor: 'pointer' }}>
            Laundry Simulator
          </h2>

          <p>Run your own laundry!</p>
          <p>Take over an abandoned laundry and try to gain the recognition of the town's residents!</p>
        </div>

        {/*JellyCats*/}
        <div className="project" >
          <img
            src={jellyCatsScreenshot}
            alt="Jelly Cats: Restaurant"
            width="100%"
            className="zoom"
            onClick={() => openModal('jellyCats')}
            style={{ cursor: 'pointer' }}
          />

          <h2
            onClick={() => openModal('jellyCats')}
            style={{ cursor: 'pointer' }}>
            Jelly Cats: Restaurant
          </h2>

          <p>Merge cats and run a cozy restaurant!</p>
        </div>

        {/*---Deliver It---*/}
        <div className="project">
          <img
            src={deliverItScreenshot}
            alt="Deliver it!"
            width="100%"
            className="zoom"
            onClick={() => openModal('deliverIt')}
            style={{ cursor: 'pointer' }}
          />

          <h2
            onClick={() => openModal('deliverIt')}
            style={{ cursor: 'pointer' }}>Deliver it!
          </h2>

          <p>Run a delivery point and complete orders!</p>
        </div>

        {/*----- FunnyMatch -----*/}
        <div className="project">
          <img
            src={funnyMatchScreenshot}
            alt="Funny Match Master"
            width="100%"
            className="zoom"
            onClick={() => openModal('funnyMatchMaster')}
            style={{ cursor: 'pointer' }}
          />

          <h2
            onClick={() => openModal('funnyMatchMaster')}
            style={{ cursor: 'pointer' }}>
            Funny Match Master
          </h2>

          <p>Match-3 puzzle with colorful cartoon style!</p>
        </div>

        {/* ----- Tetrocraft -----*/}
        <div className="project">
          <img
            src={tetrocraftScreenshot}
            alt="Tetrocraft"
            width="100%"
            className="zoom"
            onClick={() => openModal('tetrocraft')}
            style={{ cursor: 'pointer' }}
          />
          <h2 onClick={() => openModal('tetrocraft')} style={{ cursor: 'pointer' }}>
            Tetrocraft
          </h2>
          <p>Block puzzle with Minecraft-inspired style!</p>
        </div>

      </div>
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject} />
    </div>
  );
}

export default Project;
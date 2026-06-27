import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {/* Solvex Games */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2025 — Dec 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Unity Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Solvex Games</h4>
            <p>
              Developed core combat system with 15 unique enemies and 3 boss fights. 
              Integrated Spine 2D skeletal animations. Implemented dynamic location 
              switching and a robust save system. Shipped <strong>Boo! The Mystery Story</strong> on Steam.
            </p>
          </VerticalTimelineElement>

          {/* Splash Games */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2024 — Mar 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Unity Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Splash Games</h4>
            <p>
              Designed and implemented economic systems and customer AI.
              Built employee hiring, automation, and upgrade systems.
              Used Zenject for dependency injection and DOTween for smooth animations.
              <br /><br />
              <strong>Project:</strong> Laundry Simulator – a fully functional management simulation,
              completed and ready for release on Steam.
            </p>
          </VerticalTimelineElement>

          {/* Опыт работы 3: Самозанятый / Инди-разработчик */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2023 — May 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Indie Game Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Self-employed</h4>
            <p>
              Full-cycle development of WebGL games for Yandex Games. 
              Created prototypes, implemented game mechanics, and managed the 
              complete publishing process from concept to release.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
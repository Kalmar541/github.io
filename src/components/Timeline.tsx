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
          {/* Опыт работы 1: Solvex Games */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2025 — Dec 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Unity Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Solvex Games</h4>
            <p>
              Combat system with unique enemies and bosses, Spine 2D animations, dynamic location switching, save system.
            </p>
          </VerticalTimelineElement>

          {/* Опыт работы 2: Splash Games */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2024 — Mar 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Unity Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Splash Games</h4>
            <p>
              Economic systems, customer AI, employee hiring & automation, upgrades, Zenject (DI), DOTween animations.
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
              Full cycle of game development for Yandex Games, prototyping, publishing.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
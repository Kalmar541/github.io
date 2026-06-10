import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import AvatarImage from '../assets/images/avatar-s.jpg';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={AvatarImage} alt="Dmitry Chechilo" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Kalmar541" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://t.me/DmitryChechilo" target="_blank" rel="noreferrer"><TelegramIcon/></a>
            <a href="mailto:kalmar541@yandex.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Dmitry Chechilo</h1>
          <p>Unity C# Developer | 2 Steam Games Shipped</p>
          <p>Zenject · DOTween · Spine</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Kalmar541" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://t.me/DmitryChechilo" target="_blank" rel="noreferrer"><TelegramIcon/></a>
            <a href="mailto:kalmar541@yandex.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
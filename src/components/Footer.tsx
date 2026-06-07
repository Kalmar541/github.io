import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://t.me/DmitryChechilo" target="_blank" rel="noreferrer"><TelegramIcon/></a>
        <a href="mailto:kalmar541@yandex.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
        <p>Dmitry Chechilo — Unity Developer</p>
        <p>You can also reach me directly at: <strong>kalmar541@yandex.com</strong></p>
      </div>
    </footer>
  );
}

export default Footer;
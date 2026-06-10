import React from 'react';
import '../assets/styles/Contact.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Feel free to reach out — I'm open to new opportunities and collaborations</p>
          
          <div className="contacts-list">
            <div className="contact-item">
              <TelegramIcon className="contact-icon" />
              <a href="https://t.me/DmitryChechilo" target="_blank" rel="noreferrer">
                t.me/DmitryChechilo
              </a>
            </div>
            
            <div className="contact-item">
              <EmailIcon className="contact-icon" />
              <a href="mailto:kalmar541@mail.ru" target="_blank" rel="noreferrer">
                kalmar541@mail.ru
              </a>
            </div>
            
            <div className="contact-item">
              <GitHubIcon className="contact-icon" />
              <a href="https://github.com/Kalmar541" target="_blank" rel="noreferrer">
                github.com/Kalmar541
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
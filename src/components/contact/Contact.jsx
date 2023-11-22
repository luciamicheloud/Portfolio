import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [copiedMessage, setCopiedMessage] = useState('');

  const handleGmailClick = () => {
    navigator.clipboard.writeText('micheloudrionlucia@gmail.com');
    setCopiedMessage('Gmail address copied successfully');

    setTimeout(() => {
      setCopiedMessage('');
    }, 3000); // Hide the message after 3 seconds
  };

  return (
<div>
    <div className="contact-icons">
        <img 
        className="gmail"
        onClick={handleGmailClick}
          src="https://freelogopng.com/images/all_img/1657906274logo-gmail-png.png"
          alt="Gmail"
        />


      <a href="https://github.com/luciamicheloud" target="_blank" rel="noopener noreferrer">
        <img src="https://t3.ftcdn.net/jpg/04/52/18/48/360_F_452184858_iZXfI1h2BdKB5i9cDwpu9Ue1il8Mxxfq.jpg" alt="GitHub" />
      </a>

      <a href="https://www.linkedin.com/in/lucia-micheloud-300324264/" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
      </a>

      <a href="https://twitter.com/LuciaMiche52340" target="_blank" rel="noopener noreferrer">
        <img src="https://freepnglogo.com/images/all_img/1691832460x-twitter-logo-png.png" alt="twitter" />
      </a>
    </div>
    <div className="copied-message">{copiedMessage}</div>
</div>
  );
};

export default Contact;


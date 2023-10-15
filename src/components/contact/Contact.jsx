import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/lucia-micheloud-300324264/" target="_blank" rel="noopener noreferrer">
          <img src="src/images/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/luciamicheloud" target="_blank" rel="noopener noreferrer">
          <img src="src/images/github.png" alt="GitHub" />
        </a>
        <a href="micheloudrionlucia@gmail.com">
          <img src="src/images/gmail.png" alt="Gmail" />
        </a>
        <a href="ruta-instagram" target="_blank" rel="noopener noreferrer">
          <img src="src/images/instagram.webp" alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

export default Contact;

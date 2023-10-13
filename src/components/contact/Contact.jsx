import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <div className="contact-icons">
        <a href="ruta-linkedin" target="_blank" rel="noopener noreferrer">
          <img src="src/images/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="ruta-github" target="_blank" rel="noopener noreferrer">
          <img src="src/images/github.png" alt="GitHub" />
        </a>
        <a href="mailto:tu-email@gmail.com">
          <img src="src/images/gmail.png" alt="Gmail" />
        </a>
        <a href="ruta-instagram" target="_blank" rel="noopener noreferrer">
          <img src="src/images/instagram.webp" alt="Instagram" />
        </a>
        {/* Agregar más imágenes de redes sociales según sea necesario */}
      </div>
    </div>
  );
};

export default Contact;

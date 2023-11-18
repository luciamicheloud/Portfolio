import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-icons">

        <a href="https://www.linkedin.com/in/lucia-micheloud-300324264/" target="_blank" rel="noopener noreferrer">
          <img src="src/images/linkedin.png" alt="LinkedIn" />
        </a>

        <a href="https://github.com/luciamicheloud" target="_blank" rel="noopener noreferrer">
          <img src="https://t3.ftcdn.net/jpg/04/52/18/48/360_F_452184858_iZXfI1h2BdKB5i9cDwpu9Ue1il8Mxxfq.jpg" alt="GitHub" />
        </a>

        <a href="ruta-instagram" target="_blank" rel="noopener noreferrer">
          <img src="https://freepnglogo.com/images/all_img/1691832460x-twitter-logo-png.png" alt="twitter" />
        </a>

        <a href="micheloudrionlucia@gmail.com">
          <img src="src/images/gmail.png" alt="Gmail" />
        </a>

    </div>
  );
};

export default Contact;

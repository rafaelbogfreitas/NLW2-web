import React from 'react';
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/43966974?s=400&u=e55f14d1486ecfbf0719b9531206240c56998ee1&v=4" alt="Profile picture" />
        <div>
          <strong>Rafael</strong>
          <span>Geografia</span>
        </div>
      </header>
      <p>
        Ótimo professor
            <br /><br />
            Anos de experiência com Geografia analítica e Geologia.
          </p>
      <footer>
        <p>
          Preço/hora
          <strong>
             R$ 80,00
          </strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;

import React from 'react';
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
import api from '../../services/api';

interface TeacherItemProps {
  name: string;
  avatar: string;
  subject: string;
  bio: string;
  cost: number;
  whatsapp: string;
  id: number;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ name, subject, bio, cost, avatar, whatsapp, id }) => {
  const createNewConnection = () => {
    api.post("connections", {
      user_id: id
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt="Rafael" />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>
      <p>{bio}</p>
      <footer>
        <p>
          Preço/hora
          <strong>
            R$ {cost},00
          </strong>
        </p>
        <a onClick={createNewConnection}
          href={`https://api.whatsapp.com/send?phone=${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem;

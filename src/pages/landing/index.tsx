import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./styles.css";
 
import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClasses from "../../assets/images/icons/give-classes.svg";
import purpleHeart from "../../assets/images/icons/purple-heart.svg";
import api from "../../services/api";

const Landing = () => {
  const [connections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("http://localhost:3333/connections")
      .then( resp => setTotalConnections(resp.data.total))
      .catch(console.log)
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/teach" className="give-classes">
            <img src={giveClasses} alt="Lecionar" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {connections} conexões já realizadas <img src={purpleHeart} alt="Coração" />
        </span>
      </div>
    </div>
  )
}

export default Landing

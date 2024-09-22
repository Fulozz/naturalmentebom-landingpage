import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-salad-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre</p>
        <h1 className="primary-heading">
          Comida é uma parte importante de uma dieta balanceada
        </h1>
        <p className="primary-text">
          Veja um vídeo mostrando como é produzido nossas verduras e legumes, mostrando todo o cuidado e carinho que temos com nossos produtos.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Leia mais</button>
          <a href="https://www.youtube.com/watch?v=dqBpci9Pu_g" target="_blank" rel="noreferrer" className="watch-video-button">
            <BsFillPlayCircleFill /> Veja o vídeo
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

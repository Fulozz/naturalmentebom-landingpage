import React from "react";
import Logo from "../Assets/naturalmentebom-logo.png";
//zimport { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const copyInput = () => {
    var copyText = "https://naturalmentebom.vercel.app/";

    navigator.clipboard.writeText(copyText);
    alert("Link copiado: " + copyText);
  }
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="logo" />
        </div>
        <div className="footer-icons">
          <a href="/"><BsYoutube /></a>
          <a href="https://www.facebook.com/groups/manutencaoextintores/"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/in/ligia-andrade-9b9a7120/"><SiLinkedin /></a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualidade</span>
          <span>Ajuda</span>
          <span onClick={copyInput}>Compartilhar</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>contato.naturalmentebom@gmail</span>
          <span>ligia.amsilva@gmail</span>
          <span>thiago.sandrade0720@gmail</span>
          
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>Feito com ❤ por <a href="https://www.linkedin.com/in/thiagoandrade072/">Thiago Silva Andrade</a></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

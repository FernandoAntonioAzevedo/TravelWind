import Logo from "../../assets/img/footer-logo.png";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { links } from "../../Data";
import { FaMapMarkerAlt,FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ScrollLink from "../links/ScrollLink";
import { footerGallery } from "../../Data";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container grid">
        <div>
          <a href="/" className="footer-logo">
            <img src={Logo} alt="" className="footer-logo-img" />
          </a>

          <p className="footer-description">
            Explorando o Mundo, um destino de cada vez conosco.
          </p>

          <div className="footer-socials">
            <a href="facebok.com" target="_blank" className="footer-social-link">
              <FaFacebookF />
            </a>

            <a href="instagram.com" target="_blank" className="footer-social-link">
              <FaInstagram />
            </a>

            <a href="x.com" target="_blank" className="footer-social-link">
              <FaXTwitter />
            </a>
          </div>
        </div>

        <div>
          <h3 className="footer-title">Links rápidos</h3>

          <ul className="footer-links grid">
            {links.map((link, index) => {
              return(
                <li className="footer-item" key={index}>
                  <ScrollLink to={link} name={link} className="footer-link" />
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Contatos</h3>

          <div className="footer-contact grid">
            <div className="footer-item">
              <FaMapMarkerAlt className="footer-icon" />
              <p className="footer-info">
                Endereço da rua ficticia, cidade e número 0000
              </p>
            </div>

            <div className="footer-item">
              <FaPhoneAlt className="footer-icon" />
              <p className="footer-info">
                +55 011 3609-0039
              </p>
            </div>

            <div className="footer-item">
              <FaEnvelope className="footer-icon" />
              <p className="footer-info">
                contato@travelwind.com.br
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="footer-title">Galeria</h3>

          {footerGallery.map((footerGallery, index) => {
            return (
              <img 
                src={footerGallery} 
                alt="" 
                className="footer-img"
                key={index} 
              />
            );
          })}  
        </div>
      </div>
    </footer>
  );
};

export default Footer;
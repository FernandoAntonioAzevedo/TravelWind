import Logo from "../../assets/img/logo.png.png";
import { links } from "../../Data";
import ScrollLink from "../links/ScrollLink";
import { RiCloseFill, RiTelegram2Line, RiMenuFill } from "react-icons/ri";
import { Link } from "react-scroll";

import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav-logo">
          <img src={Logo} alt="" className="nav-logo-img" />
        </a>

        <div className="nav-menu">
          <ul className="nav-list">
            {links.map((link, index) => {
              return(
                <li className="nav-item" key={index}>
                  <ScrollLink to={link} name={link} className="nav-link" />
                </li>
              );
            })}
          </ul>

          <RiCloseFill className="nav-close" />
        </div>

        <div className="nav-buttons">
          <ScrollLink 
            to="booking" 
            name="Agendar agora" 
            className="button nav-button" 
          >
            <RiTelegram2Line className="button-icon" />
          </ScrollLink>

          <RiMenuFill className="nav-toggle" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
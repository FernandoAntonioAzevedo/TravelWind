import { useState } from "react";
import Logo from "../../assets/img/logo.png.png";
import { links } from "../../Data";
import ScrollLink from "../links/ScrollLink";
import { RiCloseFill, RiTelegram2Line, RiMenuFill } from "react-icons/ri";
import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";

import "./header.css";

const Header = () => {
  const[showMenu, setShowMenu] = useState(false);

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav-logo" onClick={scrollTop}>
          <img src={Logo} alt="" className="nav-logo-img" />
        </Link>

        <div className={`${showMenu ? 'show-menu' : ''} nav-menu`}>
          <ul className="nav-list">
            {links.map((link, index) => {
              return(
                <li className="nav-item" key={index}>
                  <ScrollLink 
                    to={link} 
                    name={link} 
                    extraPops={{ spy: true }}
                    className="nav-link" 
                  />
                </li>
              );
            })}

            <li className="nav-item">
                  <ScrollLink 
                    to="booking" 
                    name="Agendar agora"
                    extraPops={{ offset: -50 }} 
                    className="button nav-link-button" 
                  >
                    <RiTelegram2Line className="button-icon" />
                  </ScrollLink>
            </li>
          </ul>

          <RiCloseFill 
            className="nav-close"
            onClick={() => setShowMenu(!showMenu)}  
          />
        </div>

        <div className="nav-buttons">
          <ScrollLink 
            to="booking" 
            name="Agendar agora"
            extraPops={{ offset: -50 }} 
            className="button nav-button" 
          >
            <RiTelegram2Line className="button-icon" />
          </ScrollLink>

          <RiMenuFill 
            className="nav-toggle" 
            onClick={() => setShowMenu(!showMenu)} 
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
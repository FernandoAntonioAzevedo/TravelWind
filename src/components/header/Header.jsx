import Logo from "../../assets/img/logo.svg";
import { links } from "../../Data";
import Link from "../links/Link";


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
                  <Link />
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
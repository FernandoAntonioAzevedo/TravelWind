import { PiGlobeHemisphereEastFill } from "react-icons/pi";
import ScrollLink from "../links/ScrollLink";
import { RiTelegram2Line } from "react-icons/ri";
import homeImg from "../../assets/img/home-img.png";
import Booking from "./Booking";

import "./home.css";



const Home = () => {
  return (
    <section className="home section">
      <div className="home-container container grid">
        <div className="home-data">
          <h3 className="home-subtitle">
            <PiGlobeHemisphereEastFill />
            Vamos iniciar sua jornada
          </h3>
          <h1 className="home-title">
            Sua jornada começa aqui. Encontre, Agende, Viaje!
          </h1>

          <p className="home-description">
            Descubra, planeje e reserve jornadas inesquecíveis com nossas 
            recomendações de especialistas e se inspire para sua próxima viagem.
          </p>

          <ScrollLink 
            to="about" 
            name="Sobre nós" 
            className="button button-white" 
          >
            <RiTelegram2Line className="button-icon" />
          </ScrollLink>
        </div>

        <img src={homeImg} alt="" className="home-img" />
      </div>

      <Booking icon={<RiTelegram2Line />} />
    </section>
  );
};

export default Home;
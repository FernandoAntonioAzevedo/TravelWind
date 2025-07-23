import aboutImg from "../../assets/img/about-img.png";
import SectionTitle from "../title/SectionTitle";
import ScrollLink from "../links/ScrollLink";
import { RiTelegram2Line } from "react-icons/ri";

import "./about.css";

const About = () => {
  return (
    <section className="about section">
      <div className="about-container container grid">
        <img src={aboutImg} alt="" className="about-img" />

        <div className="about-content">
          <SectionTitle
            subtitle="Nós somos a Travel Wind" 
            title="Explorando o Mundo, um destino de cada vez conosco."  
            description="Exploring the World, one destination at a Time with us" 
          />

          <div className="about-data">
            <div className="about-item">
              <p className="about-no">15+</p>
              <h3 className="about-title">Anos de experiência</h3>
            </div>

            <div className="about-item">
              <p className="about-no">10k</p>
              <h3 className="about-title">Jornada de sucesso</h3>
            </div>

            <div className="about-item">
              <p className="about-no">10+</p>
              <h3 className="about-title">Prêmios conquistados</h3>
            </div>
          </div>

           <ScrollLink 
            to="/" 
            name="Saiba Mais" 
            className="button" 
          >
            <RiTelegram2Line className="button-icon" />
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default About;
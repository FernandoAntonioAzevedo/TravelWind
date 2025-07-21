import { PiGlobeHemisphereEastFill } from "react-icons/pi";
import ScrollLink from "../links/ScrollLink";
import { RiTelegram2Line } from "react-icons/ri";



const Home = () => {
  return (
    <section className="home section">
      <div className="home-container container grid">
        <div className="home-data">
          <h3 className="home-subtitle">
            <PiGlobeHemisphereEastFill />
            Let's Start your Journey
          </h3>
          <h1 className="home-title">
            Your Journey Begins Here - Find, Book, Travel!
          </h1>

          <p className="home-description">
            Discover, plan, and book unforgetable journeys with our expert
            recommendations and travel inspiration.
          </p>

        <ScrollLink 
            to="about" 
            name="Sobre nós" 
            className="button nav-button" 
          >
            <RiTelegram2Line className="button-icon" />
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Home;
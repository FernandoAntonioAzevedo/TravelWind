import SectionTitle from "../title/SectionTitle";
import { destinations } from "../../Data";
import { RiTelegram2Line } from "react-icons/ri";
import ScrollLink from "../links/ScrollLink";

import "./destinations.css";

const Destinations = () => {
  return (
    <section className="destinations section container">
      <SectionTitle
            subtitle="Os melhores destinos" 
            title="Lugares lendários"  
            description="Exploring the World, one destination at a Time with us" 
          />

          <div className="destinations-container">
            {destinations.map(({id, img, title, price, rating}) => {
              return (
                <div className="destination-item" key={id}>
                  <img src={img} alt="" className="destinations-img" />

                  <div className="destination-details">
                    <div className="destination-top">
                      <span className="destination-price">{price}</span>
                      <span className="destination-rating">{rating}</span>
                    </div>

                    <h3 className="destination-title">{title}</h3>

                    <ScrollLink 
                      to="/" 
                      name="Detalhes" 
                      className="button button-white" 
                    >
                      <RiTelegram2Line className="button-icon" />
                    </ScrollLink>
                  </div>
                </div>
              );
            })}
          </div>
    </section>
  );
};

export default Destinations;
import SectionTitle from "../title/SectionTitle";
import { 
  RiArrowLeftCircleLine, 
  RiArrowRightCircleLine, 
  RiTelegram2Line   
} from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { tours } from "../../Data";
import ScrollLink from "../links/ScrollLink";
import Stars from "./Stars";

import "swiper/css";
import "swiper/css/navigation";

import "./tours.css";

const Tours = () => {
  return (
    <section className="tours container section">
      <div className="category-header">
        <SectionTitle
          subtitle="Epic Adventures Tour" 
          title="Selecione seu passeio"  
          description="Encontre aqui passeios em seu destino e desfrute cada momento dessa
          imersão multicultural." 
        />

        <div className="swiper-btns">
          <button className="swiper-btn prev-btn">
            <RiArrowLeftCircleLine />
          </button>

          <button className="swiper-btn next-btn">
            <RiArrowRightCircleLine />
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={12}
        grabCursor={true}
        loop={true} 
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }} 
        modules={[Navigation]} 
        breakpoints={{         
          768: {
            slidesPerView: 2,            
          },
          1024: {
            slidesPerView: 3,            
          },
          1208: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}       
      >
        {tours.map(({img, title, location, days, price, stars}, index) => {
          return(
            <SwiperSlide className="tour-item" key={index}>
              <img src={img} alt="" className="tour-img" />

              <div className="tour-details">
                <Stars stars={stars} />

                <h3 className="tour-title">{title}</h3>
                <p className="tour-location">{location}</p>

                <hr className="tour-separator" />

                <div className="tour-days">
                  <FaCalendarAlt className="tour-icon" />
                  {days}
                </div>

                <div className="tour-bottom">
                  <p>
                    <span className="tour-price">U${price}</span>
                    <span className="tour-person">/Pessoa</span>
                  </p>

                  <ScrollLink 
                    to="/" 
                    name="Mais detalhes" 
                    className="button" 
                  >
                    <RiTelegram2Line className="button-icon" />
                  </ScrollLink>
                </div>
              </div>
            </SwiperSlide>
          );
        })}       
      </Swiper>
    </section>
  );
};

export default Tours;
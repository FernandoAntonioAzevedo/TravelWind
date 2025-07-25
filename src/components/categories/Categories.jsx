import SectionTitle from "../title/SectionTitle";
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { categories } from "../../Data";

import "swiper/css";
import "swiper/css/navigation";

import "./categories.css"
 
const Categories = () => {
  return (
    <section className="categories container section">
      <div className="category-header">
        <SectionTitle 
          title="Categorias"  
          description="Encontre seu próximo destino e desfrute cada momento dessa
          imersão multicultural. Contamos com diversas opções, selecione sua categoria. " 
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
            slidesPerView: 5,            
          },
          1208: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}       
      >
        {categories.map(({img, title}, index) => {
          return(
            <SwiperSlide className="category-slide" key={index}>
              <img src={img} alt="" className="category-img" />
              <h3 className="category-title">{title}</h3>
            </SwiperSlide>
          );
        })}       
      </Swiper>
    </section>
  );
};

export default Categories
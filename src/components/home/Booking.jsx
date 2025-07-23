import { GiTreasureMap } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";

const Booking = ({ icon }) => {
  return (
    <div className="booking container">
        <form action="" className="booking-form grid">
            <div className="booking-item">
                <input 
                    type="text" 
                    placeholder="Destino" 
                    className="booking-input" />
                <GiTreasureMap className="booking-icon" />
            </div>

            <div className="booking-item">
                <input 
                    type="text" 
                    placeholder="Data saída" 
                    className="booking-input" />
                <FaCalendarAlt className="booking-icon" />
            </div>

            <span className="booking-to">de</span>

            <div className="booking-item">
                <input 
                    type="text" 
                    placeholder="Data Retorno" 
                    className="booking-input" />
                <FaCalendarAlt className="booking-icon" />
            </div>

            <button className="button booking-button">Agendar{icon}</button>
        </form>
  </div>
  );
};

export default Booking;
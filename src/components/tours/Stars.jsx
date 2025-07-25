import { FaRegStar, FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

const Stars = ({ stars }) => {
   const getStarIcon = (stars, index) => {
      const number = index + 0.5;

      if(stars >= index +1) return <FaStar />;
      if(stars >= number) return <FaStarHalfStroke />;
      return <FaRegStar />;
   };

const ratingStar = Array.from({ length: 5 }, (_, index) => (
    <li className="star" key={index}>
        {getStarIcon(stars, index)}
    </li>
   ));

  return (
    <ul className="star-wrapper">{ratingStar} </ul>
  );
};

export default Stars;
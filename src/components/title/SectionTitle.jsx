import { PiGlobeHemisphereEastFill } from "react-icons/pi";

import "./sectionTitle.css";

const SectionTitle = ({ subtitle, title, description}) => {
  return (
    <div className="section-header">
        {subtitle && (
          <>
           <p className="section-subtitle">
            <PiGlobeHemisphereEastFill />
            {subtitle}
           </p> 
          </>
        )}
        <h2 className="section-title">{title}</h2>

        <p className="section-description">{description}</p>
    </div>
  );
};

export default SectionTitle;
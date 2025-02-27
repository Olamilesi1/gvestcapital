import React from "react";
import PropTypes from "prop-types";
import { useParams } from 'react-router-dom';
import Card from "./Card"; // Assuming Card is another reusable component
import style from "../../styles/PropertyDetail.module.css";

function PropertyDetail({
  
  imageSrc,
  imageSrc1,
  imageSrc2,
  imageSrc3,
  imageSrc4,
  imageSrc5,
  imageSrc6,
  title,
  description,
  description1,
  description2,
  description3,
  description4,
  description5,
  description6,
  description7,
  description8,
  cards,
  buttonLabel,
  onButtonClick,
  dynamicCard,
}) {


  const { propertyType } = useParams();

  return (
    <div className={style.property}>
      <img src={imageSrc} alt="property" className={style.contain} />

      <div className={style.propertyDiv}>
        <div className={style.propertyTitle}>
          <h2 className={style.package}>{title}</h2>
          <p className={style.par}>{description}</p>

      <p>Showing details for: <strong>{propertyType}</strong></p>

          <div className={style.paras}>
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                bgColor={card.bgColor}
                textColor={card.textColor}
                borderColor={card.borderColor}
              />
            ))}
          </div>
          {/* Render the additional dynamic card */}
          {dynamicCard && (
            <Card
              title={dynamicCard.title}
              bgColor={dynamicCard.bgColor}
              textColor={dynamicCard.textColor}
              borderColor={dynamicCard.borderColor}
            />
          )}

          <div className={style.period}>
            <img src={imageSrc1} alt="property" className={style.contai} />
            <p className={style.pary}>{description1}</p>
          </div>

          <div className={style.period1}>
            <div className={style.period}>
              <img src={imageSrc2} alt="property" className={style.contai} />
              <p className={style.pary}>{description2}</p>
            </div>

            <div className={style.period}>
              <img src={imageSrc3} alt="property" className={style.contai} />
              <p className={style.pary}>{description3}</p>
            </div>
          </div>

          <div className={style.period1}>
            <div className={style.period}>
              <img src={imageSrc4} alt="property" className={style.contai} />
              <p className={style.pary}>{description4}</p>
            </div>
            <div className={style.period}>
              <img src={imageSrc5} alt="property" className={style.contai} />
              <p className={style.pary}>{description5}</p>
            </div>
          </div>

          <div className={style.period}>
            <img src={imageSrc6} alt="property" className={style.contai} />
            <p className={style.pary}>{description6}</p>
          </div>

        </div>

        <div className={style.period2}>
          <button className={style.investDetail} onClick={onButtonClick}>
            {buttonLabel}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>

          <div className={style.period3}>
            <p className={style.perio}>{description7}</p>
            <p className={style.perio}>{description8}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

PropertyDetail.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      bgColor: PropTypes.string,
      textColor: PropTypes.string,
      borderColor: PropTypes.string,
    })
  ).isRequired,
  buttonLabel: PropTypes.string,
  onButtonClick: PropTypes.func,
  dynamicCard: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    borderColor: PropTypes.string,
  }),
};

PropertyDetail.defaultProps = {
  cards: [],
  buttonLabel: "View Detail",
  onButtonClick: () => {},
  dynamicCard: null,
};

export default PropertyDetail;

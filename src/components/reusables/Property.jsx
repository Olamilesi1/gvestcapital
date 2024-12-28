import React from "react";
import PropTypes from "prop-types";
import Card from "./Card"; // Assuming Card is another reusable component
import style from "../../styles/Property.module.css";

function Property({
  imageSrc,
  title,
  description,
  cards,
  buttonLabel,
  onButtonClick,
  dynamicCard,
}) {
  return (
    <div className={style.property}>
      <img src={imageSrc} alt="property" className={style.contain} />

      <div className={style.propertyDiv}>
        <div className={style.propertyTitle}>
          <h2 className={style.package}>{title}</h2>
          <p className={style.par}>{description}</p>

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
        </div>

        <button className={style.investDetail} onClick={onButtonClick}>
          {buttonLabel}
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}

Property.propTypes = {
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

Property.defaultProps = {
  buttonLabel: "View Detail",
  onButtonClick: () => {},
  dynamicCard: null,
};

export default Property;

import React from "react";
import styles from "../../styles/Cards.module.css";

function Cards({ imageSrc, title, paragraph, bgColor, textColor }) {
  const cardStyle = {
    backgroundColor: bgColor || "rgba(244, 245, 255, 1)", // Default background color
    color: textColor || "rgba(26, 35, 126, 1)", // Default text color
  };
  return (
    <>
      <div className={styles.card} style={cardStyle}>
        <img src={imageSrc} alt="card" className={styles.cardImage} />
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardPara}>{paragraph}</p>
      </div>
    </>
  );
}

export default Cards;

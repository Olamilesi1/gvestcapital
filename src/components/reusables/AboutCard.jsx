import React from "react";
import styles from "../../styles/AboutCard.module.css";

function AboutCard({ imageSrc, title, paragraph, bgColor, textColor }) {
  const cardStyle = {
    backgroundColor: bgColor || "rgba(244, 245, 255, 1)", // Default background color
    color: textColor || "rgba(26, 35, 126, 1)", // Default text color
  };
  return (
    <>
      <div className={styles.card} style={cardStyle}>
        <div className={styles.imgCard}>
        <img src={imageSrc} alt="card" className={styles.cardImage} />
        <p className={styles.cardTitle}>{title}</p>
        </div>
        
        <p className={styles.cardPara}>{paragraph}</p>
      </div>
    </>
  );
}

export default AboutCard;

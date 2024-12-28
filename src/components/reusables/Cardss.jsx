import styles from "../../styles/Cardss.module.css";

function Cardss({ imageSrc, title, bgColor, textColor, borderColor }) {
  const cardStyle = {
    backgroundColor: bgColor || "rgba(0, 0, 255, 0.1)", // Default background color
    color: textColor || " rgba(0, 0, 255, 0.8)", // Default text color
  };

  return (
    <>
      <div className={styles.card} style={cardStyle}>
        <img src={imageSrc} alt="card" className={styles.cardImage} />
        <p className={styles.para} style={cardStyle}>
          {title}
        </p>
      </div>
    </>
  );
}

export default Cardss;

import styles from "../../styles/Card.module.css";

function Card({ title, bgColor, textColor, borderColor }) {
  const cardStyle = {
    backgroundColor: bgColor || "rgba(0, 0, 255, 0.1)", // Default background color
    color: textColor || " rgba(0, 0, 255, 0.8)", // Default text color
    border: borderColor || ".1rem solid rgba(0, 0, 255, 0.8)",
  };

  return (
    <>
      <p className={styles.para} style={cardStyle}>
        {title}
      </p>
    </>
  );
}

export default Card;

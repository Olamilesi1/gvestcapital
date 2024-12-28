import styles from "../../styles/Info.module.css";

function Info({ title, paragraph, bgColor }) {
  const cardStyle = {
    backgroundColor: bgColor || "rgba(244, 245, 255, 1)", // Default background color
  };
  return (
    <>
      <div className={styles.card} style={cardStyle}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardPara}>{paragraph}</p>
      </div>
    </>
  );
}

export default Info;

import styles from "../../styles/TeamCard.module.css";

function TeamCard({ paragraph, imageSrc, name, title }) {
  return (
    <div>
      <div className={styles.profileCard}>
        <img src={imageSrc} alt="profile" className={styles.profile} />
        <h5>{name}</h5>
        <p className={styles.profileText2}>{title}</p>
      </div>
    </div>
  );
}

export default TeamCard;

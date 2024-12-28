import styles from "../../styles/Profile.module.css";

function Profile({ paragraph, imageSrc, name, title }) {
  return (
    <div>
      <div className={styles.profileCard}>
        <p className={styles.profileText1}>{paragraph}</p>
        <img src={imageSrc} alt="profile" className={styles.profile} />
        <p>{name}</p>
        <p className={styles.profileText2}>{title}</p>
      </div>
    </div>
  );
}

export default Profile;

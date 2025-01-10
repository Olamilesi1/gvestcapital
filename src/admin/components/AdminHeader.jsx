
import style from '../../user/styles/userheader.module.css'

function AdminHeader() {
  return (
    <>
      <div className={style.haeder}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />

        <div className={style.dashIcon}>
          <p className={style.dashboard}>Dashboard</p>
          <span class="material-symbols-outlined">chevron_left</span>
        </div>

        <div className={style.dashLogos}>
          <span class="material-symbols-outlined">notifications</span>
          <div className={style.profile}>
          <img src="/images/profile.jpeg" alt="person"  className={style.person}/>
          </div>
          <p>Dannies</p>
          <span class="material-symbols-outlined">keyboard_arrow_down</span>
        </div>
      </div>
    </>
  );
}

export default AdminHeader;

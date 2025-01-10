import style from "../styles/upcoming.module.css";

function Upcoming() {
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

      <div className={style.upcoming}>
        <div className={style.upAll}>
          <p className={style.up}>Upcoming Actions</p>
          <p className={style.all}>View all</p>
        </div>

        <div className={style.dateInvest}>
          <div className={style.date}>
            <p className={style.wed}>Mon</p>
            <p className={style.colorl}>16</p>
          </div>
          <div className={style.investDirect}>
            <div className={style.invest}>
              <p className={style.color}> Investor Dividened-Doe i...</p>
              <p className={style.colors}>10:00 am</p>
            </div>
           <span class="material-symbols-outlined">arrow_right</span>
          </div>
        </div>

        <div className={style.dateInvest}>
          <div className={style.date}>
            <p className={style.wed}>Mon</p>
            <p className={style.colorl}>16</p>
          </div>
          <div className={style.investDirect}>
            <div className={style.invest}>
              <p className={style.color}> Investor Dividened-Doe i...</p>
              <p className={style.colors}>10:00 am</p>
            </div>
           <span class="material-symbols-outlined">arrow_right</span>
          </div>
        </div>

        <div className={style.dateInvest}>
          <div className={style.date}>
            <p className={style.wed}>Mon</p>
            <p className={style.colorl}>16</p>
          </div>
          <div className={style.investDirect}>
            <div className={style.invest}>
              <p className={style.color}> Investor Dividened-Doe i...</p>
              <p className={style.colors}>10:00 am</p>
            </div>
           <span class="material-symbols-outlined">arrow_right</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Upcoming;

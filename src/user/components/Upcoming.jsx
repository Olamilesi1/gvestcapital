import style from "../styles/upcoming.module.css";

function Upcoming() {
  return (
    <>
      <div className={style.upcoming}>
        <div className={style.upAll}>
          <p className={style.up}>Upcoming Actions</p>
          <p className={style.all}>View all</p>
        </div>

        <div className={style.dateInvest}>
          <div className={style.date}>
            <p>Mon</p>
            <p className={style.color}>16</p>
          </div>
          <div className={style.investDirect}>
            <div className={style.invest}>
              <p className={style.color}> Investtor Dividened-Doe i...</p>
              <p>10:00 am</p>
            </div>
            <p>click</p>
          </div>
        </div>

        <div className={style.dateInvest}>
          <div className={style.date}>
            <p>Mon</p>
            <p className={style.color}>16</p>
          </div>
          <div className={style.investDirect}>
            <div className={style.invest}>
              <p className={style.color}> Investtor Dividened-Doe i...</p>
              <p>10:00 am</p>
            </div>
            <p>click</p>
          </div>
        </div>

        <div className={style.dateInvest}>
          <div className={style.date}>
            <p>Mon</p>
            <p className={style.color}>16</p>
          </div>
          <div className={style.investDirect}>
            <div className={style.invest}>
              <p className={style.color}> Investtor Dividened-Doe i...</p>
              <p>10:00 am</p>
            </div>
            <p>click</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Upcoming;

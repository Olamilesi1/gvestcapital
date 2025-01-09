import style from "../styles/usernotification.module.css";

function Notification() {
  return (
    <div>
      <div className={style.notification}>
        <div className={style.notificationLeft}>
          <p className={style.notiInvest}>Investment Opportunity Update</p>
          <p className={style.notiPlan}>New Investment Plan Available</p>
          <p>
            Explore our latest 36-month investment plan with 14% annual ROI.
            Limited slots available
          </p>
        </div>
        
        <div className={style.notificationRight}>
          <button className={style.btn}>View detail</button>
        </div>
      </div>
    </div>
  );
}

export default Notification;

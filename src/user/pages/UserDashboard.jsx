import SideBar from "../components/UserSideBar";
import PaymentList from "../components/PaymentList";
import Upcoming from "../components/Upcoming";
import TotalMonthInterest from "../components/TotalMonthInterest";
import InvestedOptions from "../components/InvestedOptions";
import UserHeader from "../components/UserHeader";
import style from "../styles/userdashboard.module.css";

function UserDashboard() {
  
  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
            <div className={style.investTotal}>
              <TotalMonthInterest />
              <InvestedOptions />
              <TotalMonthInterest />
            </div>

            <div className={style.overcome}>
              <Upcoming />
            </div>

            <PaymentList />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;

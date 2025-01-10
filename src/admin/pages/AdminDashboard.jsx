import SideBar from "../components/AdminSideBar";
import PaymentList from "../components/PaymentList";
import Upcoming from "../../user/components/Upcoming";
import TotalMonthInterest from "../../user/components/TotalMonthInterest";
import InvestedOptions from "../../user/components/InvestedOptions";
import UserHeader from "../components/AdminHeader";
import style from "../styles/admindashboard.module.css";
function AdminDashboard() {
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
            <PaymentList />
              <Upcoming />
            </div>

            <PaymentList />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;

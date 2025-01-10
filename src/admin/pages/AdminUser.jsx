import SideBar from "../components/AdminSideBar";
import PaymentList from "../components/PaymentList";
import Upcoming from "../../user/components/Upcoming";
import TotalMonthInterest from "../../user/components/TotalMonthInterest";
import InvestedOptions from "../../user/components/InvestedOptions";
import UserHeader from "../components/AdminHeader";
import style from "../styles/admindashboard.module.css";
import Transactions from "../../user/components/Transactions";
function AdminDashboard() {
  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
              <p>Investors List</p>
           {/* <PaymentList /> */}
              <Transactions/>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;

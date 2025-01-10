import SideBar from "../components/AdminSideBar";
import UserHeader from "../components/AdminHeader";
import style from "../styles/admindashboard.module.css";
import Transactions from "../../user/components/Transactions";
function AdminAllInvest() {
  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
            <p>List of User Documents</p>

            <Transactions />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminAllInvest;

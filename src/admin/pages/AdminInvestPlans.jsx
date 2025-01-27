import SideBar from "../components/AdminSideBar";
import UserHeader from "../components/AdminHeader";
import style from "../styles/admindashboard.module.css";
import AdminInvestment from "../../admin/components/AdminInvestment";
function AdminAllInvest() {
  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
            <div className={style.allInvest}>
              <p>Investment Plan</p>
              <button className={style.newInvest}>All New Investments</button>
            </div>
        
              <AdminInvestment/>
      
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminAllInvest;

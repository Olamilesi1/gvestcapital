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
            <div className={style.allInvest}>
              <p>Investment Plan</p>
              <button className={style.newInvest}>All New Investments</button>
            </div>
        
              <Transactions/>
      
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminAllInvest;

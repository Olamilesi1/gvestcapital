import SideBar from "../components/AdminSideBar";
import UserHeader from "../components/AdminHeader";
import style from "../styles/admindashboard.module.css";
import TransactionHistory from "../components/AdminTransactionHistory";
import TransactionForm from "../components/AdminTransactionForm";
function AdminAllInvest() {
  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
        

            <TransactionHistory />
            {/* <TransactionForm/> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminAllInvest;

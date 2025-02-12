import SideBar from "../components/AdminSideBar";
import UserHeader from "../components/AdminHeader";
import style from "../styles/admindashboard.module.css";
import Transactions from "../components/AdminTransactionHistory";
import TransactionForm from "../components/AdminPostTransaction";
function AdminAllInvest() {
  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
            <div className={style.allInvest}>
              <p>Transactions table</p>
              <button className={style.newInvest}>Add New transaction</button>
            </div>

            {/* <Transactions /> */}
            <TransactionForm/>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminAllInvest;

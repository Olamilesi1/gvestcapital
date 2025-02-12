import SideBar from "../components/UserSideBar";
import Transactions from "../components/Transactions";
import UserHeader from "../components/UserHeader";
import style from "../styles/userdashboard.module.css";
import Transaction from "../../components/Transaction"
import TransactionHistory from "../../components/TransactionHistory";
function UserTransactions() {
  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
          
            <TransactionHistory/>
            <Transaction/>
            </div>

        </div>
      </div>
    </>
  );
}

export default UserTransactions;

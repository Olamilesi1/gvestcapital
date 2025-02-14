import SideBar from "../components/UserSideBar";
import UserHeader from "../components/UserHeader";
import style from "../styles/userdashboard.module.css";
import AddTransaction from "../components/AddTransaction";
import TransactionHistory from "../components/TransactionHistory";
function UserTransactions() {
  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
            <TransactionHistory /> 
            {/* <AddTransaction /> */}
            {/* <Transactions /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserTransactions;

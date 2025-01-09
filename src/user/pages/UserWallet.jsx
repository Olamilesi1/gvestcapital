import SideBar from "../components/UserSideBar";
import Transactions from "../components/Transactions";
import UserHeader from "../components/UserHeader";
import style from "../styles/userdashboard.module.css";
import Wallet from "../components/Wallet";
function UserWallet() {
  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
            <div className={style.document}>
              <button className={style.myDocument}>Withdraw</button>
              <button className={style.companyDocument}>Deposit</button>
            </div>

<div className={style.wallet}>

<Wallet/>
<Wallet/>
<Wallet/>
<Wallet/>
</div>
            <button className={style.initiate}>Initiate Withdrawal</button>
            <p>Withdrawal History</p>
            <Transactions />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserWallet;

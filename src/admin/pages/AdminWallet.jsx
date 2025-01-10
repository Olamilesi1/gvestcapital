import SideBar from "../components/AdminSideBar";
import UserHeader from "../components/AdminHeader";
import style from "../styles/adminwallet.module.css";
import Transactions from "../../user/components/Transactions";
function AdminWallet() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
            <p>Add New Transaction</p>

            <div className={style.inputWallet}>
              <div className={style.inputDiv}>
                <label htmlFor="" className={style.label}>
                  User
                </label>
                <input
                  type="text"
                  placeholder="Enter Client Name or Email: Min 3 Character"
                  className={style.inpu}
                />
              </div>

              <div className={style.inputDiv}>
                <label htmlFor="" className={style.label}>
                  Select Currency
                </label>
                <select name="" id="" className={style.inpu}>
                  <option value="">NGN</option>
                </select>
              </div>

              <div className={style.inputDiv}>
                <label htmlFor="" className={style.label}>
                  Amount
                </label>
                <input
                  type="number"
                  placeholder="Amount"
                  className={style.inpu}
                />
              </div>

              <div className={style.inputDiv}>
                <label htmlFor="" className={style.label}>
                  Transaction Date
                </label>
                <input
                  type="date"
                  placeholder="01/09/2025"
                  className={style.inpu}
                />
              </div>

              <div className={style.create}>
                <button className={style.creaBtn}>Create</button>
                <span class="material-symbols-outlined">grid_view</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminWallet;

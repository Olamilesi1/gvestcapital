import SideBar from "../components/UserSideBar";
import Transactions from "../components/Transactions";
import UserHeader from "../components/UserHeader";
import style from "../styles/userdashboard.module.css";
function Documents() {
  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
          <div className={style.document}>
            <button className={style.myDocument}>My Documents</button>
            <button className={style.companyDocument}>Company Documents</button>
          </div>
            <Transactions />
            </div>

        </div>
      </div>
    </>
  );
}

export default Documents;

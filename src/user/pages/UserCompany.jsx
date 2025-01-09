import { useNavigate } from "react-router-dom";
import SideBar from "../components/UserSideBar";
import Transactions from "../components/Transactions";
import UserHeader from "../components/UserHeader";
import style from "../styles/userdashboard.module.css";
function UserCompany() {
    const navigate = useNavigate();
    const company = () => {
        navigate("/user/company"); // Navigate to the '/compound' page
      };

    const mine = () => {
        navigate("/user/mine"); // Navigate to the '/compound' page
      };

  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
          <div className={style.document}>
            <button className={style.companyDocument} onClick={mine}>My Documents</button>
            <button className={style.myDocument} onClick={company}>Company Documents</button>
          </div>
            <Transactions />
            </div>

        </div>
      </div>
    </>
  );
}

export default UserCompany;

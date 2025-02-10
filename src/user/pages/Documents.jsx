import SideBar from "../components/UserSideBar";
import Transactions from "../components/Transactions";
import UserHeader from "../components/UserHeader";
import style from "../styles/userdashboard.module.css";
import { useNavigate } from "react-router-dom";
import UserDocumentList from "../components/UserDocumentList";
function Documents() {
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
            <UserDocumentList />
            </div>

        </div>
      </div>
    </>
  );
}

export default Documents;

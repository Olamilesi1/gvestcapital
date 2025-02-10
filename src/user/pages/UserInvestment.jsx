import { useNavigate } from "react-router-dom";
import SideBar from "../components/UserSideBar";
import UserHeader from "../components/UserHeader";
import style from "../styles/userinvestments.module.css";

function UserInvestments() {
  const navigate = useNavigate();

  const handleCompoundClick = () => {
    navigate("/user/compound-interest"); // Navigate to the '/compound' page
  };

  const handleSimpleClick = () => {
    navigate("/user/simple-interest"); // Navigate to the '/compound' page
  };

  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
            <p className={style.investText}>Invest and Grow Your Wealth</p>
            <p>
              Choose the investment strategy that works best for you-simple or
              compound interest. Start building your financial futre today.
            </p>

            <div className={style.simpleCompund}>
              <button className={style.simple} onClick={handleSimpleClick}>
                Simple Interest
              </button>
              <button className={style.compound} onClick={handleCompoundClick}>
                Compound Interest
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInvestments;

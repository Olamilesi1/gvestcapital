import { useNavigate } from "react-router-dom";
import SideBar from "../components/UserSideBar";
import UserHeader from "../components/UserHeader";
import style from "../styles/usernotification.module.css";
import Notification from "../components/Notification";

function UserNotification() {
  const navigate = useNavigate();

  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserNotification;

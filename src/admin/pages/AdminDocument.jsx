import { HeaderProvider } from "../../components/HeaderContext";
import SideBar from "../components/AdminSideBar";
import UserHeader from "../components/AdminHeader";
import style from "../styles/admindashboard.module.css";
import AdminDocumentList from "../components/AdminDocumentList";

function AdminAllInvest() {
  return (
    <>
      {/* <HeaderProvider> */}
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
            <p>List of User Documents</p>

            <AdminDocumentList />
          </div>
        </div>
      </div>
      {/* </HeaderProvider> */}
    </>
  );
}

export default AdminAllInvest;

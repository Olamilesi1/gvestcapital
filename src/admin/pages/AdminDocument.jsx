import SideBar from "../components/AdminSideBar";
import UserHeader from "../components/AdminHeader";
import style from "../styles/admindashboard.module.css";
import AdminDocumentList from "../components/AdminDocumentList";
import UploadDocument from "../components/UploadDocument";

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
            {/* <UploadDocument/> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminAllInvest;

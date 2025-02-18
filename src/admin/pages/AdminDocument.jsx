import { useState } from "react";
import SideBar from "../components/AdminSideBar";
import UserHeader from "../components/AdminHeader";
import style from "../styles/admindashboard.module.css";
import AdminDocumentList from "../components/AdminDocumentList";
import UploadDocument from "../components/UploadDocument";

function AdminAllInvest() {
 const [isModalOpen, setIsModalOpen] = useState(false); // Controls the modal visibility

  return (
    <>
      {/* <HeaderProvider> */}
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
            <div className={`${isModalOpen ? style.blurBackground : ""}`}>
              <div className={style.allInvest}>
                <p>List of User Documents</p>

                {/* Open Investment Plan Section */}
                <button
                  className={style.newInvest}
                  onClick={() => setIsModalOpen(true)}
                >
                  Upload A User Document
                </button>
              </div>
            </div>

            <AdminDocumentList />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={style.modalOverlay}>
          <div className={style.modalContentl}>
            {/* Close Button */}
            <button
              className={style.closeButtonl}
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <div className={style.scrollableForm}>
              <UploadDocument />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminAllInvest;

import { useState } from "react";
import SideBar from "../components/AdminSideBar";
import UserHeader from "../components/AdminHeader";
import style from "../styles/admindashboard.module.css";
import AddInvestmentScheme from "../components/AddInvestmentScheme";
import AddPropertyScheme from "../components/AddPropertyScheme";
import AdminPropertySchemeTable from "../components/AdminPropertySchemeTable";
import AdminInvestSchemeTable from "../components/AdminInvestSchemeTable";

function AdminAllInvest() {
  const [activeScheme, setActiveScheme] = useState("investment"); // Default to Investment
  const [isModalOpen, setIsModalOpen] = useState(false); // Controls the modal visibility

  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
            <div className={`${isModalOpen ? style.blurBackground : ""}`}>
              <div className={style.allInvest}>
                <p>Investment Plan</p>

                {/* Open Investment Plan Section */}
                <button
                  className={style.newInvest}
                  onClick={() => setIsModalOpen(true)}
                >
                  Add New Investment Plan
                </button>
              </div>
            </div>
            <AdminPropertySchemeTable />
            <AdminInvestSchemeTable />
          </div>
          
        </div>
      </div>

      {/* Investment Plan Section (Appears Only When Modal is Open) */}
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

            {/* Toggle Investment or Property Scheme */}
            <div className={style.schemes}>
              <button
                className={
                  activeScheme === "investment" ? style.scheme : style.scheme2
                }
                onClick={() => setActiveScheme("investment")}
              >
                Investment Scheme
              </button>
              <button
                className={
                  activeScheme === "property" ? style.scheme : style.scheme2
                }
                onClick={() => setActiveScheme("property")}
              >
                Property Scheme
              </button>
            </div>

            {/* Scrollable Form */}
            <div className={style.scrollableForm}>
              {activeScheme === "investment" ? (
                <AddInvestmentScheme />
              ) : (
                <AddPropertyScheme />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminAllInvest;

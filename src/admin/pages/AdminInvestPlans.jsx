import SideBar from "../components/AdminSideBar";
import UserHeader from "../components/AdminHeader";
import style from "../styles/admindashboard.module.css";
import AdminInvestment from "../../admin/components/AdminInvestment";
import AddInvestmentScheme from "../components/AddInvestmentScheme";
// import AdminInvestmentSchemeForm from "../components/AddInvestmentSchemeForm";
import AddPropertyScheme from "../components/AddPropertyScheme";
import AdminPropertySchemeTable from "../components/AdminPropertySchemeTable";
function AdminAllInvest() {
  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
            <div className={style.allInvest}>
              <p>Investment Plan</p>
              <button className={style.newInvest}>Add New Investment Plan</button>

              <div className={style.all}>
                <p>Filter</p>
                <select name="" id="">
                  <option value="">All</option>
                  <option value="">Trek</option>
                  <option value="">Run</option>
                  <option value="">Fly</option>
                </select>
              </div>
            </div>

          <AdminPropertySchemeTable/>

            <AddPropertyScheme />
            {/* <AddInvestmentScheme /> */}
            {/* <AdminInvestment /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminAllInvest;

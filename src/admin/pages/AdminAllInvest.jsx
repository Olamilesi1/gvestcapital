import { NavLink, useNavigate } from "react-router-dom";
import SideBar from "../components/AdminSideBar";
import UserHeader from "../components/AdminHeader";
import style from "../styles/admindashboard.module.css";
import AdminInvestmentTable from "../components/UsersInvestmentTable";

function AdminAllInvest() {
  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
            <div className={style.allInvest}>
              <p>Investments</p>
              <button className={style.newInvest}>
                {" "}
                <NavLink
                  className={({ isActive }) => (isActive ? style.active : "")}
                  to="/admin/add-propertyinvest"
                >
                  <span>Add New Investment</span>
                </NavLink>
              </button>

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


            <AdminInvestmentTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminAllInvest;

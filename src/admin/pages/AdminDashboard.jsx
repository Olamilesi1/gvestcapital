import SideBar from "../components/AdminSideBar";
import { NavLink } from "react-router-dom";
import Transaction from "../components/Transaction";
import Upcoming from "../../user/components/Upcoming";
import AdminTotal from "../components/AdminTotal";
import UserHeader from "../components/AdminHeader";
import style from "../styles/admindashboard.module.css";
import AdminUsers from "../pages/UserCompo";
function AdminDashboard() {
  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
            <div className={style.investTotal}>
              <AdminTotal />
              <AdminTotal />
              <AdminTotal />
            </div>

            <div className={style.overcome}>
              <div className={style.come}>
                <div className={style.dash}>
                  <p className={style.list}>Investors List </p>

                  <div className={style.dasl}>
                  <button className={style.view}>
                  <NavLink to="/admin/users" className={style.link}>
                    View More
                  </NavLink>
                </button>
                  </div>
                </div>

                <div className={style.otherSide}>
                  <AdminUsers />
                </div>
              </div>
              <div>
                <Upcoming />
              </div>
            </div>
            <div className={style.dash}>
              <p className={style.list}>Recent Payment List </p>

              <div className={style.dasl}>
                <button className={style.view}>
                  <NavLink to="/admin/users" className={style.link}>
                    View More
                  </NavLink>
                </button>
              </div>
            </div>
            <Transaction />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;

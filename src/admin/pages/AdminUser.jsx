import SideBar from "../components/AdminSideBar";
import UserHeader from "../components/AdminHeader";
import style from "../styles/admindashboard.module.css";
import Transactions from "../../user/components/Transactions";
import AdminUsers from "../components/AdminUsers";
function AdminDashboard() {
  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
            <div className={style.invtFilt}>
            <p>Investors List</p>

            <div className={style.drum}>
              <p>Filter:</p>
              <select name="" id="">
                <option value="drum">drum</option>
                <option value="drum">drum</option>
                <option value="drum">drum</option>
              </select>
            </div>
            </div>
            <AdminUsers />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;

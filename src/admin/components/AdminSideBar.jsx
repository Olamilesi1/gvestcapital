import {NavLink} from 'react-router-dom'
import { useHeader } from "../../components/HeaderContext";
import style from '../../user/styles/sidebar.module.css'

function AdminSideBar() {
  const { setHeaderTitle } = useHeader();

  const handleLinkClick = (title) => {
    setHeaderTitle(title);
  };
  return <div className={style.bar}>
    
    <img src='/images/gVestLogo.png' alt="img" className={style.logos}/>
   
    <nav className={style.sideHeader}>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

                <ul className={style.navUl1}>
                    <li className={style.navLi} ><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/admin/dashboard' onClick={() => handleLinkClick("Dashboard")}>
                      <span class="material-symbols-outlined">grid_view</span>
                     <span>Dashboard</span></NavLink></li>

                    <li className={style.navLi}><NavLink   className={({ isActive }) => (isActive ? style.active : "")} to='/admin/users' onClick={() => handleLinkClick("Users")}><span class="material-symbols-outlined">monitoring</span> <span>Users</span></NavLink></li>
                    <li className={style.navLi}><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/admin/invest-plans' onClick={() => handleLinkClick("Invest Plans")}><span class="material-symbols-outlined">account_balance_wallet</span> <span>Investment Plans</span></NavLink></li>
                    <li className={style.navLi}><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/admin/all-investments' onClick={() => handleLinkClick("All Investments")}><span class="material-symbols-outlined">account_balance_wallet</span> <span>All Investment</span></NavLink></li>
                    <li className={style.navLi}><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/admin/transactions' onClick={() => handleLinkClick("Transactions")}><span class="material-symbols-outlined">business_center</span> <span>Transactions</span></NavLink></li>
                    <li className={style.navLi}><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/admin/mine' onClick={() => handleLinkClick("Documents")}><span class="material-symbols-outlined">sticky_note_2</span> <span>Documents</span></NavLink></li>
                    <li className={style.navLi}><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/admin/wallet' onClick={() => handleLinkClick("Wallet")}><span class="material-symbols-outlined">account_balance_wallet</span> <span>Wallet</span></NavLink></li>
                    <li className={style.navLi}><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/admin/notification' onClick={() => handleLinkClick("Notification")}><span class="material-symbols-outlined">notifications</span> <span>Notification</span></NavLink></li>
                    {/* <li className={style.navLi}><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/admin/news'><span class="material-symbols-outlined">rss_feed</span> <span>News</span></NavLink></li> */}
                    </ul>

                    <ul className={style.navUl2}>
                    <li className={style.navLi}><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/admin/term' onClick={() => handleLinkClick("Term")}><span class="material-symbols-outlined">sticky_note_2</span> <span>Terms & Conditions</span></NavLink></li>
                    <li className={style.navLi}><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/admin/setting' onClick={() => handleLinkClick("Setting")}><span class="material-symbols-outlined">settings</span> <span>Settings</span></NavLink></li>
                    <li className={style.navLi}><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/admin/help' onClick={() => handleLinkClick("Help")}><span class="material-symbols-outlined">help</span> <span>Help</span></NavLink></li>
                    <li className={style.navLi}><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/login'><span class="material-symbols-outlined">logout</span> <span>Logout</span></NavLink></li>
                </ul>
            </nav>
 </div>;
}

export default AdminSideBar;

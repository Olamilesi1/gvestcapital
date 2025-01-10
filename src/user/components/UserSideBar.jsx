import {NavLink} from 'react-router-dom'
import style from '../styles/sidebar.module.css'

function UserSideBar() {
  return <div className={style.bar}>
    
    <img src='/images/gVestLogo.png' alt="img" className={style.logos}/>
   
    <nav className={style.sideHeader}>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

                <ul className={style.navUl1}>
                    <li className={style.navLi} ><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/user/dashboard'>
                      <span class="material-symbols-outlined">grid_view</span>
                     <span>Dashboard</span></NavLink></li>
                    <li className={style.navLi}><NavLink   className={({ isActive }) => (isActive ? style.active : "")} to='/user/properties' ><span class="material-symbols-outlined">apartment</span> <span>Properties</span></NavLink></li>
                    <li className={style.navLi}><NavLink   className={({ isActive }) => (isActive ? style.active : "")} to='/user/investments' ><span class="material-symbols-outlined">monitoring</span> <span>My Investments</span></NavLink></li>
                    <li className={style.navLi}><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/user/wallet'><span class="material-symbols-outlined">account_balance_wallet</span> <span>Wallet</span></NavLink></li>
                    <li className={style.navLi}><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/user/transactions'><span class="material-symbols-outlined">business_center</span> <span>Transactions</span></NavLink></li>
                    <li className={style.navLi}><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/user/mine'><span class="material-symbols-outlined">sticky_note_2</span> <span>Documents</span></NavLink></li>
                    <li className={style.navLi}><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/user/notification'><span class="material-symbols-outlined">notifications</span> <span>Notification</span></NavLink></li>
                    {/* <li className={style.navLi}><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/user/news'><span class="material-symbols-outlined">rss_feed</span> <span>News</span></NavLink></li> */}
                    </ul>

                    <ul className={style.navUl2}>
                    <li className={style.navLi}><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/user/term'><span class="material-symbols-outlined">sticky_note_2</span> <span>Terms & Conditions</span></NavLink></li>
                    <li className={style.navLi}><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/user/setting'><span class="material-symbols-outlined">settings</span> <span>Settings</span></NavLink></li>
                    <li className={style.navLi}><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/user/help'><span class="material-symbols-outlined">help</span> <span>Help</span></NavLink></li>
                    <li className={style.navLi}><NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/login'><span class="material-symbols-outlined">logout</span> <span>Logout</span></NavLink></li>
                </ul>
            </nav>
 </div>;
}

export default UserSideBar;

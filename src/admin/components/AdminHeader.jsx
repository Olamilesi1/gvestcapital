import style from "../../user/styles/userheader.module.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useHeader } from "../../components/HeaderContext";
import "react-toastify/dist/ReactToastify.css"
import { useAdmin } from "../../components/AdminContext";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

function AdminHeader() {
  const context = useContext(useAdmin) || {};
  const { username, setUsername } = context;

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
    const { headerTitle } = useHeader();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        let currentUsername = username || localStorage.getItem("adminUsername");
        // console.log(localStorage.getItem("adminUsername"))

        if (!currentUsername) {
          toast.error("Username is not available. Redirecting to login...");
          navigate("/admin/login");
          return;
        }

        const token = localStorage.getItem("adminAuthToken");
        if (!token) {
          toast.error("Unauthorized access. Please log in.");
          navigate("/admin/login");
          return;
        }

        const API_URL = process.env.REACT_APP_API_URL;
        const response = await axios.get(
          `http://localhost:4000/admin/one-admin/${currentUsername}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log(response.data); // Check the response format

        // if (response.data && response.data.userData?.username) {
        //   console.log(response.data.userData.username);
        // }

        setUserData(response.data.adminData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        if (error.response?.status === 404) {
          toast.error("User not found. Please check the username.");
        } else {
          toast.error("Failed to fetch user data.");
        }
       
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username, navigate]);

  // if (loading) {
  //   return <p>Loading...</p>; // Or a spinner component
  // }
  return (
    <>
      <div className={style.haeder}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />

        <div className={style.dashIcon}>
          <p className={style.dashboard}>{headerTitle}</p>
          <span class="material-symbols-outlined">chevron_left</span>
        </div>

        <div className={style.dashLogos}>
          <span class="material-symbols-outlined">notifications</span>
          <div className={style.profile}>
            {/* <img
              src="/images/profile.jpeg"
              alt="person"
              className={style.person}
            /> */}
            <img
              src={
                userData?.profilePicture ||
                "/images/default-profile.jpg"
              }
              alt="person"
              className={style.person}
            />
          </div>
          <p>{username}</p>
          <span class="material-symbols-outlined">keyboard_arrow_down</span>
        </div>
      </div>
    </>
  );
}

export default AdminHeader;

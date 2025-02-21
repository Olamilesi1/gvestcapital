import style from "../styles/userheader.module.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useHeader } from "../../components/HeaderContext";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../components/UserContext";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

function UserHeader() {
  const context = useContext(useUser) || {};
  const { username, setUsername } = context;

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const { headerTitle } = useHeader();
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        let currentUsername = username || localStorage.getItem("userUsername");

        if (!currentUsername) {
          toast.error("Username is not available. Redirecting to login...");
          navigate("/login");
          return;
        }

        const token = localStorage.getItem("userAuthToken");
        if (!token) {
          toast.error("Unauthorized access. Please log in.");
          navigate("/login");
          return;
        }

        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        const response = await axios.get(
          // `http://localhost:4000/user/one-user/${currentUsername}`,
          `${API_BASE_URL}/user/one-user/${currentUsername}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log(response.data); // Check the response format

        setUserData(response.data.userData);
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

  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     const currentUsername = localStorage.getItem("userUsername");
  //     if (!currentUsername) {
  //       toast.error("User not found. Please log in.");
  //       return;
  //     }

  //     const token = localStorage.getItem("userAuthToken");
  //     if (!token) {
  //       toast.error("Unauthorized access. Please log in.");
  //       return;
  //     }

  //     try {
  //       const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  //       const response = await axios.get(
  //         `${API_BASE_URL}/user/profile/${currentUsername}`,
  //         { headers: { Authorization: `Bearer ${token}` } }
  //       );

  //       console.log("Fetched Profile Data:", response.data);

  //       // Ensure profile picture updates correctly
  //       const updatedImageUrl = response.data.data.profilePictureUrl
  //         ? `${response.data.data.profilePictureUrl}?t=${new Date().getTime()}`
  //         : "/images/default-profile.jpg"; // Prevent caching and provide fallback

  //       setImageSrc(updatedImageUrl);
  //       localStorage.setItem("profileImage", updatedImageUrl);
  //     } catch (error) {
  //       console.error("Error fetching profile:", error);
  //       toast.error("Failed to fetch profile data.");
  //     }
  //   };

  //   fetchUserProfile();
  // }, []);

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
            {/* <img
              src={userData?.profilePicture || "/images/default-profile.jpg"}
              alt="person"
              className={style.person}
            /> */}

            <img
              src={imageSrc || "/images/default-profile.jpg"} // Fallback to default profile image
              alt="Profile"
              className={style.person}
              // style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
          </div>
          <p>{username}</p>
          <span class="material-symbols-outlined">keyboard_arrow_down</span>
        </div>
      </div>
    </>
  );
}

export default UserHeader;

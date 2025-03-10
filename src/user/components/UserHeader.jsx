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
  const [hasNotifications, setHasNotifications] = useState(false);
  const handleNotificationClick = () => {
    setHasNotifications(false); // Clear the red dot
    navigate("/user/notification"); // Adjust this to your actual notifications page route
  };

  const goBack = () => {
    navigate(-1); // This takes the user to the previous page
  };

  useEffect(() => {
    const markNotificationsRead = async () => {
      try {
        const token = localStorage.getItem("userAuthToken");
        const currentUsername = localStorage.getItem("userUsername");

        await axios.put(
          `${process.env.REACT_APP_API_BASE_URL}/api/notification/${currentUsername}/mark-read`,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } catch (error) {
        console.error("Failed to mark notifications as read:", error);
      }
    };

    markNotificationsRead();
  }, []);

  // useEffect(() => {
  //   const fetchNotifications = async () => {
  //     try {
  //       const token = localStorage.getItem("userAuthToken");
  //       const currentUsername =
  //         username || localStorage.getItem("userUsername");

  //       const response = await axios.get(
  //         `${process.env.REACT_APP_API_BASE_URL}/api/notification/${currentUsername}`,
  //         {
  //           headers: { Authorization: `Bearer ${token}` },
  //         }
  //       );

  //       if (response.data.notifications.length > 0) {
  //         setHasNotifications(true);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching notifications:", error);
  //     }
  //   };

  //   fetchNotifications();
  // }, [username]);

  // useEffect(() => {

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("userAuthToken");
      const currentUsername = username || localStorage.getItem("userUsername");

      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/notification/${currentUsername}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const hasUnread = response.data.notifications.some(
        (notification) => !notification.read
      );

      setHasNotifications(hasUnread); // ✅ Correct logic
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, [username]);

  // const fetchNotifications = async () => {
  //   try {
  //     const token = localStorage.getItem("userAuthToken");
  //     const currentUsername =
  //       username || localStorage.getItem("userUsername");

  //     const response = await axios.get(
  //       `${process.env.REACT_APP_API_BASE_URL}/api/notification/${currentUsername}`,
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );

  //     // Check if any notifications are unread
  //     const hasUnread = response.data.notifications.some(
  //       (notification) => !notification.read
  //     );

  //     setHasNotifications(hasUnread);

  //     if (response.data.notifications.length > 0) {
  //       setHasNotifications(true);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching notifications:", error);
  //   }
  // };

  //   fetchNotifications();
  // }, [username]);

  useEffect(() => {
    const storedProfileImage = localStorage.getItem("profileImage");
    if (storedProfileImage) {
      setImageSrc(storedProfileImage); // Set the header image to the saved one
    }

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
          `${API_BASE_URL}/user/one-user/${currentUsername}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setUserData(response.data.userData);

        // Optional: If you want to update imageSrc from API if localStorage image is missing
        if (!storedProfileImage && response.data.userData.profilePictureUrl) {
          setImageSrc(response.data.userData.profilePictureUrl);
          localStorage.setItem(
            "profileImage",
            response.data.userData.profilePictureUrl
          );
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username, navigate]);

  return (
    <>
      <div className={style.haeder}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />

        <div className={style.dashIcon}>
          <p className={style.dashboard}>{headerTitle}</p>
          <span class="material-symbols-outlined" onClick={goBack}>
            chevron_left
          </span>
        </div>

        <div className={style.dashLogos}>
          {/* <span class="material-symbols-outlined">notifications</span> */}
          <div
            className={style.notificationIcon}
            onClick={handleNotificationClick}
          >
            <span className="material-symbols-outlined">notifications</span>
            {hasNotifications && (
              <span className={style.notificationDot}></span>
            )}
          </div>

          <div className={style.profile}>
            <img
              src={imageSrc || "/images/default-profile.jpg"}
              alt="Profile"
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

export default UserHeader;

// import style from "../styles/userheader.module.css";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useHeader } from "../../components/HeaderContext";
// import "react-toastify/dist/ReactToastify.css";
// import { useUser } from "../../components/UserContext";
// import { useNavigate } from "react-router-dom";
// import { useContext, useState, useEffect } from "react";
// import { useNotification } from "../../components/NotificationContext";

// function UserHeader() {
//   const context = useContext(useUser) || {};
//   const { username, setUsername } = context;
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [userData, setUserData] = useState(null);
//   const { headerTitle } = useHeader();
//   const [imageSrc, setImageSrc] = useState("");
//   // const [hasNotifications, setHasNotifications] = useState(false);
//   const { hasNotifications, fetchNotifications } = useNotification();

//   const handleNotificationClick = () => {
//     // setHasNotifications(false); // Clear red dot when user views notifications
//     navigate("/user/notification");
//   };

//   const goBack = () => {
//     navigate(-1);
//   };

//   // const fetchNotifications = async () => {
//   //   try {
//   //     const token = localStorage.getItem("userAuthToken");
//   //     const currentUsername = username || localStorage.getItem("userUsername");

//   //     const response = await axios.get(
//   //       `${process.env.REACT_APP_API_BASE_URL}/api/notification/${currentUsername}`,
//   //       {
//   //         headers: { Authorization: `Bearer ${token}` },
//   //       }
//   //     );

//   //     const hasUnread = response.data.notifications.some(
//   //       (notification) => !notification.read
//   //     );

//   //     setHasNotifications(hasUnread);
//   //   } catch (error) {
//   //     console.error("Error fetching notifications:", error);
//   //   }
//   // };

//   useEffect(() => {
//     fetchNotifications();  // Initial fetch

//     const interval = setInterval(fetchNotifications, 60000);  // Poll every minute

//     return () => clearInterval(interval);  // Cleanup
//   }, [username]);

//   useEffect(() => {
//     const storedProfileImage = localStorage.getItem("profileImage");
//     if (storedProfileImage) setImageSrc(storedProfileImage);

//     const fetchUser = async () => {
//       setLoading(true);
//       try {
//         const currentUsername = localStorage.getItem("userUsername");
//         // const currentUsername = username || localStorage.getItem("userUsername");
//         if (!currentUsername) {
//           toast.error("Username not available. Redirecting to login...");
//           navigate("/login");
//           return;
//         }

//         const token = localStorage.getItem("userAuthToken");
//         if (!token) {
//           toast.error("Unauthorized access. Please log in.");
//           navigate("/login");
//           return;
//         }

//         const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
//         const response = await axios.get(
//           `${API_BASE_URL}/user/one-user/${currentUsername}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         setUserData(response.data.userData);

//         if (!storedProfileImage && response.data.userData.profilePictureUrl) {
//           setImageSrc(response.data.userData.profilePictureUrl);
//           localStorage.setItem(
//             "profileImage",
//             response.data.userData.profilePictureUrl
//           );
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         toast.error("Failed to fetch user data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, [username, navigate]);

//   return (
//     <div className={style.haeder}>
//       <link
//         rel="stylesheet"
//         href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
//       />

//       <div className={style.dashIcon}>
//         <p className={style.dashboard}>{headerTitle}</p>
//         <span className="material-symbols-outlined" onClick={goBack}>
//           chevron_left
//         </span>
//       </div>

//       <div className={style.dashLogos}>
//         <div className={style.notificationIcon} onClick={handleNotificationClick}>
//           <span className="material-symbols-outlined">notifications</span>
//           {hasNotifications && <span className={style.notificationDot}></span>}
//         </div>

//         <div className={style.profile}>
//           <img
//             src={imageSrc || "/images/default-profile.jpg"}
//             alt="Profile"
//             className={style.person}
//           />
//         </div>
//         <p>{username}</p>
//         <span className="material-symbols-outlined">keyboard_arrow_down</span>
//       </div>
//     </div>
//   );
// }

// export default UserHeader;

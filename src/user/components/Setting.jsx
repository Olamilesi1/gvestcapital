// import { useState, useContext, useEffect } from "react";
// import axios from "axios";
// import style from "../styles/usernotification.module.css";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import { useUser } from "../../components/UserContext"; // Make sure you're importing the context

// function Setting() {
//   const navigate = useNavigate();
//   const [imageSrc, setImageSrc] = useState(
//     localStorage.getItem("profileImage") || ""
//   );

//   // const { username, email } = useContext(useUser); // Destructure username and email from context
//   const { username, email } = useContext(useUser);

//   const [formData, setFormData] = useState({
//     phoneNumber: "",
//     gender: "",
//     dateOfBirth: "",
//     maritalStatus: "",
//     employmentStatus: "",
//     city: "",
//     state: "",
//     country: "",
//     profilePicture: "",
//   });

//   const [isEditing, setIsEditing] = useState(false); // Controls edit mode
//   const [loading, setLoading] = useState(false); // Loading state to improve user experience

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData((prevData) => ({ ...prevData, profilePicture: file }));
//   };

//   const handleSubmit = async () => {
//     try {
//       const currentUsername = localStorage.getItem("userUsername");
//       console.log("Current Username:", currentUsername);
//       if (!currentUsername) {
//         toast.error("Username is not available. Please log in again.");
//         return;
//       }

//       const token = localStorage.getItem("authToken");
//       if (!token) {
//         toast.error("Unauthorized access. Please log in.");
//         return;
//       }

//       // Save updated profile to localStorage after submission
//       // localStorage.setItem("profileData", JSON.stringify(formData));

//       const data = new FormData();
//       Object.keys(formData).forEach((key) => {
//         if (key === "profilePicture" && formData[key] instanceof File) {
//           data.append(key, formData[key]);
//         } else {
//           data.append(key, formData[key] || "");
//         }
//       });

//       const response = await axios.put(
//         `http://localhost:4000/user/profile/${currentUsername}`,
//         data,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       toast.success(response.data.message);
//       localStorage.setItem(
//         "profileData",
//         JSON.stringify({
//           ...formData,
//           profilePictureUrl: response.data.profilePictureUrl,
//         })
//       );

//       // Save the profile picture URL separately for direct use
//       localStorage.setItem("profileImage", response.data.profilePictureUrl);

//       setIsEditing(false); // Disable editing after successful update
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       toast.error("Failed to update profile.");
//     }
//   };

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const currentUsername = localStorage.getItem("userUsername");
//       if (!currentUsername) {
//         toast.error("User not found. Please log in.");
//         return;
//       }

//       const token = localStorage.getItem("authToken");
//       if (!token) {
//         toast.error("Unauthorized access. Please log in.");
//         return;
//       }

//       // Check localStorage first before making a network request
//       const savedData = localStorage.getItem("profileData");
//       // if (savedData) {
//       //   setFormData(JSON.parse(savedData)); // Load saved data from localStorage
//       // }
//       if (savedData) {
//         const profileData = JSON.parse(savedData);
//         setFormData(profileData);
//         setImageSrc(profileData.profilePictureUrl); // This will store the URL in the state
//       } else {
//         try {
//           const response = await axios.get(
//             `http://localhost:4000/user/profile/${currentUsername}`,
//             { headers: { Authorization: `Bearer ${token}` } }
//           );
//           setFormData(response.data); // Pre-fill the form with user data
//           localStorage.setItem("profileData", JSON.stringify(response.data)); // Save to localStorage for persistence
//           localStorage.setItem("profileImage", response.data.profilePictureUrl); // Save the image URL directly
//           localStorage.getItem("profileImage", response.data.profilePictureUrl); // Save the image URL directly
//         } catch (error) {
//           console.error("Error fetching profile:", error);
//           toast.error("Failed to fetch profile data.");
//         }
//       }
//     };

//     fetchUserProfile();
//   }, []); // Only runs once on component mount

//   const handlePasswordClick = () => {
//     navigate("/user/setting"); // Navigate to the '/compound' page
//   };

//   const handleProfileClick = () => {
//     navigate("/user/password"); // Navigate to the '/compound' page
//   };
//   return (
//     <div>
//       <div className={style.set}>
//         <div className={style.profilePassword}>
//           <button className={style.profile} onClick={handlePasswordClick}>
//             Profile
//           </button>
//           <button className={style.password} onClick={handleProfileClick}>
//             Password
//           </button>
//         </div>

//         <div className={style.imageText}>
//           {/* <img
//             src={
//               formData.profilePicture instanceof File
//                 ? URL.createObjectURL(formData.profilePicture)
//                 : `http://localhost:4000/uploads/${formData.profilePicture}`
//             }
//             alt="Profile Picture" // Just "Profile Picture" is enough
//             style={{ width: "100px", height: "100px", borderRadius: "50%" }}
//           /> */}

//           {imageSrc ? (
//             <img src={imageSrc} alt="Profile" />
//           ) : (
//             <img src="defaultImagePath.jpg" alt="Default Profile" />
//           )}
//           <input
//             type="file"
//             name="profilePicture"
//             accept="image/*"
//             onChange={handleFileChange}
//             disabled={!isEditing}
//           />

//           <div className={style.texts}>
//             <p className={style.text1}>{username}</p>
//             <p className={style.text2}>{email}</p>
//           </div>
//         </div>

//         <div className={style.edit}>
//           {isEditing ? (
//             <button className={style.edits} onClick={handleSubmit}>
//               Save
//             </button>
//           ) : (
//             <button className={style.edits} onClick={() => setIsEditing(true)}>
//               Edit
//             </button>
//           )}
//         </div>

//         <div className={style.labeInpu}>
//           <div className={style.labe}>
//             <label className={style.lab} htmlFor="">
//               Phone Number
//             </label>
//             <input
//               type="text"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               placeholder="+111-12121212121"
//               className={style.input}
//               disabled={!isEditing}
//             />
//           </div>

//           <div className={style.labe}>
//             <label className={style.lab} htmlFor="">
//               Gender
//             </label>
//             <select
//               value={formData.gender}
//               name="gender"
//               onChange={handleChange}
//               id=""
//               className={style.input}
//               disabled={!isEditing}
//             >
//               <option value="">Select</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//           </div>
//         </div>

//         <div className={style.labeInpu}>
//           <div className={style.labe}>
//             <label className={style.lab} htmlFor="">
//               Marital Status
//             </label>
//             <select
//               value={formData.maritalStatus}
//               name="maritalStatus"
//               onChange={handleChange}
//               className={style.input}
//               disabled={!isEditing}
//             >
//               <option value="">Select</option>
//               <option value="Single">Single</option>
//               <option value="Married">Married</option>
//             </select>
//           </div>

//           <div className={style.labe}>
//             <label className={style.lab} htmlFor="">
//               Date of Birth
//             </label>
//             <input
//               type="date"
//               name="dateOfBirth"
//               value={formData.dateOfBirth}
//               onChange={handleChange}
//               placeholder="01/01/2025"
//               className={style.input}
//               disabled={!isEditing}
//             />
//           </div>
//         </div>

//         <div className={style.labeInpu}>
//           <div className={style.labe}>
//             <label className={style.lab} htmlFor="">
//               Emploment Status
//             </label>
//             <select
//               value={formData.employmentStatus}
//               name="employmentStatus"
//               onChange={handleChange}
//               className={style.input}
//               disabled={!isEditing}
//             >
//               <option value="">Select</option>
//               <option value="Employed">Employed</option>
//               <option value="Unemployed">Unemployed</option>
//             </select>
//           </div>

//           <div className={style.labe}>
//             <label className={style.lab} htmlFor="">
//               City
//             </label>
//             <input
//               type="text"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               className={style.input}
//               disabled={!isEditing}
//             />
//           </div>
//         </div>

//         <div className={style.labeInpu}>
//           <div className={style.labe}>
//             <label className={style.lab} htmlFor="">
//               State
//             </label>
//             <input
//               type="text"
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               className={style.input}
//               disabled={!isEditing}
//             />
//           </div>

//           <div className={style.labe}>
//             <label className={style.lab} htmlFor="">
//               Country
//             </label>
//             <input
//               type="text"
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               className={style.input}
//               disabled={!isEditing}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Setting;

import { useState, useContext, useEffect } from "react";
import axios from "axios";
import style from "../styles/usernotification.module.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useUser } from "../../components/UserContext"; // Make sure you're importing the context

function Setting() {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(
    localStorage.getItem("profileImage") || ""
  );

  // const { username, email } = useContext(useUser); // Destructure username and email from context
  const { username, email } = useContext(useUser);

  const [formData, setFormData] = useState({
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
    maritalStatus: "",
    employmentStatus: "",
    city: "",
    state: "",
    country: "",
    profilePicture: "",
  });

  const [isEditing, setIsEditing] = useState(false); // Controls edit mode
  const [loading, setLoading] = useState(false); // Loading state to improve user experience

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData((prevData) => ({ ...prevData, profilePicture: file }));
  //   setImageSrc(URL.createObjectURL(file)); // Show preview immediately
  // };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({ ...prevData, profilePicture: file }));
      setImageSrc(URL.createObjectURL(file)); // Show preview before upload
    }
  };
  
  // const handleSubmit = async () => {
  //   try {
  //     const currentUsername = localStorage.getItem("userUsername");
  //     console.log("Current Username:", currentUsername);
  //     if (!currentUsername) {
  //       toast.error("Username is not available. Please log in again.");
  //       return;
  //     }

  //     const token = localStorage.getItem("authToken");
  //     if (!token) {
  //       toast.error("Unauthorized access. Please log in.");
  //       return;
  //     }

  //     // Save updated profile to localStorage after submission
  //     // localStorage.setItem("profileData", JSON.stringify(formData));

  //     const data = new FormData();
  //     Object.keys(formData).forEach((key) => {
  //       if (key === "profilePicture" && formData[key] instanceof File) {
  //         data.append(key, formData[key]);
  //       } else {
  //         data.append(key, formData[key] || "");
  //       }
  //     });
  
  //     const response = await axios.put(
  //       `http://localhost:4000/user/profile/${currentUsername}`,
  //       data,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     if (response.data.profilePictureUrl) {
  //       localStorage.setItem("profileImage", response.data.profilePictureUrl);
  //       setImageSrc(response.data.profilePictureUrl); // Update image preview
  //     }
  //     console.log("Profile Image URL:", imageSrc);
  //     toast.success("Profile updated successfully!");
  //     setIsEditing(false); // Disable editing after successful update
  //   } catch (error) {
  //     console.error("Error updating profile:", error);
  //     toast.error("Failed to update profile.");
  //   }
  // };

  // const handleSubmit = async () => {
  //   try {
  //     const currentUsername = localStorage.getItem("userUsername");
  //     if (!currentUsername) {
  //       toast.error("Username is not available. Please log in again.");
  //       return;
  //     }
  
  //     const token = localStorage.getItem("authToken");
  //     if (!token) {
  //       toast.error("Unauthorized access. Please log in.");
  //       return;
  //     }
  
  //     const data = new FormData();
  //     Object.keys(formData).forEach((key) => {
  //       if (key === "profilePicture" && formData[key] instanceof File) {
  //         data.append(key, formData[key]);
  //       } else {
  //         data.append(key, formData[key] || "");
  //       }
  //     });
  
  //     const response = await fetch(`http://localhost:4000/user/profile/${currentUsername}`, {
  //       method: "PUT",
  //       body: data,
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  
  //     if (!response.ok) {
  //       throw new Error("Failed to update profile");
  //     }
  
  //     const responseData = await response.json();
  
  //     // Save the correct image URL
  //     if (responseData.profilePictureUrl) {
  //       localStorage.setItem("profileImage", responseData.profilePictureUrl);
  //       setImageSrc(responseData.profilePictureUrl);
  //     }
  
  //     toast.success("Profile updated successfully!");
  //     setIsEditing(false); // Disable editing after successful update
  //   } catch (error) {
  //     console.error("Error updating profile:", error);
  //     toast.error("Failed to update profile.");
  //   }
  // };
  
  const handleSubmit = async () => {
    try {
      const currentUsername = localStorage.getItem("userUsername");
      if (!currentUsername) {
        toast.error("Username is not available. Please log in again.");
        return;
      }
  
      const token = localStorage.getItem("authToken");
      if (!token) {
        toast.error("Unauthorized access. Please log in.");
        return;
      }
  
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "profilePicture" && formData[key] instanceof File) {
          data.append(key, formData[key]); // Ensure image is properly appended
        } else {
          data.append(key, formData[key] || "");
        }
      });
  
      const response = await axios.put(
        `http://localhost:4000/user/profile/${currentUsername}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (response.data.profilePictureUrl) {
        const imageUrl = `http://localhost:4000/uploads/${response.data.profilePictureFilename}`; // Ensure correct path
  
        // Save the correct image URL
        localStorage.setItem("profileImage", imageUrl);
        setImageSrc(imageUrl); // Update state with correct URL
      }
  
      toast.success("Profile updated successfully!");
      setIsEditing(false); // Disable editing after successful update
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile.");
    }
  };
  
  useEffect(() => {
    const fetchUserProfile = async () => {
      const currentUsername = localStorage.getItem("userUsername");
      const token = localStorage.getItem("authToken");
  
      if (!currentUsername || !token) {
        toast.error("User not found or unauthorized. Please log in.");
        return;
      }
  
      const savedData = localStorage.getItem("profileData");
      if (savedData) {
        const profileData = JSON.parse(savedData);
        setFormData(profileData);
        // setImageSrc(profileData.profilePictureUrl || "defaultImagePath.jpg");
      } else {
        try {
          const response = await axios.get(
            `http://localhost:4000/user/profile/${currentUsername}`,
            { headers: { Authorization: `Bearer ${token}` } }
          );
  
          localStorage.setItem("profileData", JSON.stringify(response.data));
          localStorage.setItem("profileImage", response.data.profilePictureUrl);
          

          setFormData(response.data);
          // setImageSrc(response.data.profilePictureUrl || "defaultImagePath.jpg");

          if (response.data.profilePictureUrl) {
            const imageUrl = `http://localhost:4000/uploads/${response.data.profilePictureFilename}`;
            localStorage.setItem("profileImage", imageUrl);
            setImageSrc(imageUrl);
          } else {
            setImageSrc("defaultImagePath.jpg"); // Set default if no image exists
          }
      
        } catch (error) {
          toast.error("Failed to fetch profile data.");
        }
      }
    };
  
    fetchUserProfile();
  }, []);
  
  const handlePasswordClick = () => {
    navigate("/user/setting"); // Navigate to the '/compound' page
  };

  const handleProfileClick = () => {
    navigate("/user/password"); // Navigate to the '/compound' page
  };
  return (
    <div>
      <div className={style.set}>
        <div className={style.profilePassword}>
          <button className={style.profile} onClick={handlePasswordClick}>
            Profile
          </button>
          <button className={style.password} onClick={handleProfileClick}>
            Password
          </button>
        </div>

        <div className={style.imageText}>
          {/* <img
            src={
              formData.profilePicture instanceof File
                ? URL.createObjectURL(formData.profilePicture)
                : `http://localhost:4000/uploads/${formData.profilePicture}`
            }
            alt="Profile Picture" // Just "Profile Picture" is enough
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          /> */}

          {imageSrc ? (
            <img src={imageSrc} alt="Profile" />
          ) : (
            <img src="defaultImagePath.jpg" alt="Default Profile" />
          )}
          <input
            type="file"
            name="profilePicture"
            accept="image/*"
            onChange={handleFileChange}
            disabled={!isEditing}
          />

          <div className={style.texts}>
            <p className={style.text1}>{username}</p>
            <p className={style.text2}>{email}</p>
          </div>
        </div>

        <div className={style.edit}>
          {isEditing ? (
            <button className={style.edits} onClick={handleSubmit}>
              Save
            </button>
          ) : (
            <button className={style.edits} onClick={() => setIsEditing(true)}>
              Edit
            </button>
          )}
        </div>

        <div className={style.labeInpu}>
          <div className={style.labe}>
            <label className={style.lab} htmlFor="">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+111-12121212121"
              className={style.input}
              disabled={!isEditing}
            />
          </div>

          <div className={style.labe}>
            <label className={style.lab} htmlFor="">
              Gender
            </label>
            <select
              value={formData.gender}
              name="gender"
              onChange={handleChange}
              id=""
              className={style.input}
              disabled={!isEditing}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div className={style.labeInpu}>
          <div className={style.labe}>
            <label className={style.lab} htmlFor="">
              Marital Status
            </label>
            <select
              value={formData.maritalStatus}
              name="maritalStatus"
              onChange={handleChange}
              className={style.input}
              disabled={!isEditing}
            >
              <option value="">Select</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
          </div>

          <div className={style.labe}>
            <label className={style.lab} htmlFor="">
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              placeholder="01/01/2025"
              className={style.input}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className={style.labeInpu}>
          <div className={style.labe}>
            <label className={style.lab} htmlFor="">
              Emploment Status
            </label>
            <select
              value={formData.employmentStatus}
              name="employmentStatus"
              onChange={handleChange}
              className={style.input}
              disabled={!isEditing}
            >
              <option value="">Select</option>
              <option value="Employed">Employed</option>
              <option value="Unemployed">Unemployed</option>
            </select>
          </div>

          <div className={style.labe}>
            <label className={style.lab} htmlFor="">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={style.input}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className={style.labeInpu}>
          <div className={style.labe}>
            <label className={style.lab} htmlFor="">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={style.input}
              disabled={!isEditing}
            />
          </div>

          <div className={style.labe}>
            <label className={style.lab} htmlFor="">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={style.input}
              disabled={!isEditing}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;

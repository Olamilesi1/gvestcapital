import { useState, useContext, useEffect } from "react";
import axios from "axios";
import style from "../styles/usernotification.module.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useUser } from "../../components/UserContext"; // Make sure you're importing the context

function Setting() {
  const navigate = useNavigate();
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
  });


  // Load user data on component mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      const currentUsername = localStorage.getItem("userUsername");
      if (!currentUsername) {
        toast.error("User not found. Please log in.");
        return;
      }

      const token = localStorage.getItem("authToken");
      if (!token) {
        toast.error("Unauthorized access. Please log in.");
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:4000/user/profile/${currentUsername}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setFormData(response.data); // Pre-fill the form with user data
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("Failed to fetch profile data.");
      }
    };

    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const currentUsername = localStorage.getItem("userUsername");
      console.log("Current Username:", currentUsername); // Check the username
      if (!currentUsername) {
        toast.error("Username is not available. Please log in again.");
        return;
      }

      const token = localStorage.getItem("authToken");
      if (!token) {
        toast.error("Unauthorized access. Please log in.");
        return;
      }
      console.log(
        "Sending data to:",
        `http://localhost:4000/user/profile/${currentUsername}`,
        formData
      ); // Log the URL and data

      // Send the profile update request using username
      const response = await axios.put(
        `http://localhost:4000/user/profile/${currentUsername}`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success(response.data.message);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile.");
    }
  };

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
          <img
            src="/images/gVestLogo.png"
            alt="profile"
            className={style.prof}
          />

          <div className={style.texts}>
            <p className={style.text1}>{username}</p>
            <p className={style.text2}>{email}</p>
          </div>
        </div>

        <div className={style.edit}>
          <button className={style.edits} onClick={handleSubmit}>
            Save
          </button>
        </div>

        <div className={style.labeInpu}>
          <div className={style.labe}>
            <label className={style.lab} htmlFor="">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              id=""
              value={formData.phoneNumber} 
              onChange={handleChange}
              placeholder="+111-12121212121"
              className={style.input}
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
              id=""
              value={formData.dateOfBirth}
              onChange={handleChange}
              placeholder="01/01/2025"
              className={style.input}
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
              id=""
              onChange={handleChange}
              className={style.input}
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
            {/* <select name="" id="" className={style.input}>
          <option value="">Lekki</option>
          <option value="">Female</option>
        </select> */}
            <input
              type="text"
              name="city"
              value={formData.city} 
              onChange={handleChange}
              className={style.input}
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;

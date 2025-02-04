import { useState, useEffect } from "react";
import style from "../../user/styles/usernotification.module.css";

function AdminUser({ user, goBack }) {
  const [activeTab, setActiveTab] = useState("profile"); // Track active tab

  const [imageSrc, setImageSrc] = useState(
    user.profilePicture || "defaultImagePath.jpg"
  );
  const [selectedFile, setSelectedFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    // Convert the ISO date string to the correct format (yyyy-MM-dd)
    if (updatedUser.dateOfBirth) {
      const date = new Date(updatedUser.dateOfBirth);
      const formatted = date.toISOString().split("T")[0]; // "yyyy-MM-dd"
      setFormattedDate(formatted);
    }
  }, [updatedUser.dateOfBirth]);

  // Handle input changes
  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  // Handle profile picture change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImageSrc(URL.createObjectURL(file)); // Preview image before upload
    }
  };

  // Save changes (send to backend)
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("phoneNumber", updatedUser.phoneNumber);
      formData.append("gender", updatedUser.gender);
      formData.append("maritalStatus", updatedUser.maritalStatus);
      formData.append("dateOfBirth", updatedUser.dateOfBirth);
      formData.append("employmentStatus", updatedUser.employmentStatus);
      formData.append("city", updatedUser.city);
      formData.append("state", updatedUser.state);
      formData.append("country", updatedUser.country);
      if (selectedFile) {
        formData.append("profilePicture", selectedFile);
      }

      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

      const response = await fetch(
        `${API_BASE_URL}/user/profile/${user.username}`,
        // `http://localhost:4000/user/profile/${user.username}`,
        {
          method: "PUT",
          body: formData, // Send FormData instead of JSON
        }
      );

      if (response.ok) {
        alert("Profile updated successfully");
        setIsEditing(false);
      } else {
        alert("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this profile?"))
      return;

    try {
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
      const response = await fetch(
        `${API_BASE_URL}/admin/delete-user/${user._id}`,
        // `http://localhost:4000/admin/delete-user/${user._id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Profile deleted successfully");
        goBack();
      } else {
        alert("Failed to delete profile");
      }
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };

  return (
    <div className={style.set}>
      <button className={style.edi} onClick={goBack}>
        ← Back
      </button>

      {/* User Info Section */}

      <div className={style.imageText}>
        <img
          src={imageSrc}
          alt="Profile"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
        {isEditing && (
          <input type="file" accept="image/*" onChange={handleFileChange} />
        )}
        <div className={style.texts}>
          <p className={style.text1}>{user.username}</p>
          <p className={style.text2}>{user.email}</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className={style.profilePasswordq}>
        <button
          onClick={() => setActiveTab("profile")}
          className={activeTab === "profile" ? style.activeTab : ""}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab("investments")}
          className={activeTab === "investments" ? style.activeTab : ""}
        >
          Investments
        </button>
        <button
          onClick={() => setActiveTab("transactions")}
          className={activeTab === "transactions" ? style.activeTab : ""}
        >
          Transactions
        </button>
        <button
          onClick={() => setActiveTab("documents")}
          className={activeTab === "documents" ? style.activeTab : ""}
        >
          Documents
        </button>
      </div>

      {/* Profile Editing */}
      {activeTab === "profile" && (
        <div>
          <h3>User Profile</h3>

          <div className={style.labeInpu}>
            <div className={style.labe}>
              <label className={style.lab}>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={updatedUser.phoneNumber}
                onChange={handleChange}
                className={style.input}
                disabled={!isEditing}
              />
            </div>

            <div className={style.labe}>
              <label className={style.lab}>Gender</label>
              <select
                name="gender"
                value={updatedUser.gender}
                onChange={handleChange}
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
              <label className={style.lab}>Marital Status</label>
              <select
                name="maritalStatus"
                value={updatedUser.maritalStatus}
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
              <label className={style.lab}>Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formattedDate}
                onChange={handleChange}
                className={style.input}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className={style.labeInpu}>
            <div className={style.labe}>
              <label className={style.lab}>Employment Status</label>
              <select
                name="employmentStatus"
                value={updatedUser.employmentStatus}
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
              <label className={style.lab}>City</label>
              <input
                type="text"
                name="city"
                value={updatedUser.city}
                onChange={handleChange}
                className={style.input}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className={style.labeInpu}>
            <div className={style.labe}>
              <label className={style.lab}>State</label>
              <input
                type="text"
                name="state"
                value={updatedUser.state}
                onChange={handleChange}
                className={style.input}
                disabled={!isEditing}
              />
            </div>

            <div className={style.labe}>
              <label className={style.lab}>Country</label>
              <input
                type="text"
                name="country"
                value={updatedUser.country}
                onChange={handleChange}
                className={style.input}
                disabled={!isEditing}
              />
            </div>
          </div>

          {/* Edit & Delete Buttons */}
          <div className={style.del}>
            <div className={style.edit}>
              {isEditing ? (
                <button className={style.edits} onClick={handleSubmit}>
                  Save
                </button>
              ) : (
                <button
                  className={style.edits}
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </button>
              )}
            </div>

            <button className={style.edi} onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      )}

      {/* Other Tabs */}
      {activeTab === "investments" && (
        <div>
          <h3>Investments</h3>
          <p>
            <strong>Number of Investments:</strong> {user.investmentNumber}
          </p>
        </div>
      )}
      {activeTab === "transactions" && (
        <div>
          <h3>Transactions</h3>
          <p>Transaction details will be fetched dynamically.</p>
        </div>
      )}
      {activeTab === "documents" && (
        <div>
          <h3>Documents</h3>
          <p>User document information.</p>
        </div>
      )}
    </div>
  );
}

export default AdminUser;

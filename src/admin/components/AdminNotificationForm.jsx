import React, { useState } from "react";
import axios from "axios";

const NotificationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    description: "",
    title: "",
    update: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
      const response = await axios.post(
        `${API_BASE_URL}/admin/admin-notification`,
        formData
      );
      alert("Notification posted successfully!");
      // Optionally, reset the form
      setFormData({
        username: "",
        description: "",
        title: "",
        update: "",
      });
    } catch (error) {
      console.error("Error posting notification:", error);
      alert("Failed to post notification.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Update:</label>
        <input
          type="text"
          name="update"
          value={formData.update}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Post Notification</button>
    </form>
  );
};

export default NotificationForm;

import React, { useContext, useState, useEffect, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "../styles/Register.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

function UpdatePassword() {
  const ResetPassword = () => {
    const { token } = useParams(); // Get token from the URL if needed
    const navigate = useNavigate();
  
    // State management
    const [formData, setFormData] = useState({
      email: "",
      newPassword: "",
      confirmPassword: "",
    });
  
    const { email, newPassword, confirmPassword } = formData;
  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/reset-password`, {
        email,
        newPassword,
        confirmPassword,
      });

      toast.success(response.data.message);
      setTimeout(() => navigate("/login"), 3000); // Redirect to login page after success
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Error resetting password. Try again."
      );
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />{" "}
      {/* Toast Notifications */}
      <div className={style.register}>
        <div className={style.Para}>
          <p className={style.cardTitle}>Reset your password</p>
          <p>
            Enter your registered email address, and we’ll send you password
            reset instructions.
          </p>
        </div>

        <form action="" className={style.action} onSubmit={handleSubmit}>
          <div className={style.input}>
            <label htmlFor="" className={style.registered}>
              Registered Email
            </label>{" "}
            <br />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={style.inputs}
              placeholder="Input Your Registered Email Address"
            />
          </div>

          <button className={style.investConsult4}>
          {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        <div className={style.linav1}>
          <p className={style.vest}>@ 2024 Gvest. Alrights reserved. </p>

          <div className={style.navUl}>
            <li className={style.navLi}>
              <NavLink to="/t&c">Terms & Condition</NavLink>
            </li>
            <li className={style.navLi}>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdatePassword;

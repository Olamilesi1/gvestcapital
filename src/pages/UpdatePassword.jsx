import React, { useContext, useState, useEffect, useCallback } from "react";

import { User } from "../components/User";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "../styles/Register.module.css";
import { NavLink } from "react-router-dom";

function Login() {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState(null);
  // State to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("Logged out successfully");
  }, []);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginResolve = ({ provider, data }) => {
    setProvider(provider);
    setProfile(data);

    // Redirect to dashboard after processing login
    window.location.href = "/";
  };

  const handleLoginReject = (error) => {
    console.error("Login failed:", error);
  };
  return (
    <>
      <div className={style.register}>
        <div className={style.Para}>
          <div className={style.logoH}>
            <NavLink to="/">
              <img
                src="./images/gVestLogo.png"
                alt="gVest Logo"
                className={style.logo}
              />
            </NavLink>
          </div>
          <p className={style.cardTitle}>Update your password</p>
          <p>
            Set your new password with a minimum of 8 characters, including a
            combination of letters and numbers.
          </p>
        </div>

        <form action="" className={style.action}>
          <div className={style.textInputs}>
            <label htmlFor="">New Password</label>
            <div className={style.inputc}>
              <input
                type="text"
                required
                className={style.input}
                placeholder="Enter Your Password"
              />

              <span
                onClick={togglePasswordVisibility}
                style={{
                  cursor: "pointer",
                }}
              >
                {showPassword ? "👁️" : "🙈"}
              </span>
            </div>
          </div>

          <div className={style.textInputs}>
            <label htmlFor="">Confirm Password</label>
            <div className={style.inputc}>
              <input
                type="text"
                required
                className={style.input}
                placeholder="Re-type your new password"
              />

              <span
                onClick={togglePasswordVisibility}
                style={{
                  cursor: "pointer",
                }}
              >
                {showPassword ? "👁️" : "🙈"}
              </span>
            </div>
          </div>

          <button className={style.investConsult4}>
            <NavLink to="/login">Submit</NavLink>{" "}
          </button>

          <button className={style.investConsult3}>
            <NavLink to="/login">Back To Login</NavLink>{" "}
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

export default Login;

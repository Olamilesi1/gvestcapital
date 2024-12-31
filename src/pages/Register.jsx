import React, { useContext, useState, useEffect, useCallback } from "react";

import { User } from "../components/User";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";

// CUSTOMIZE ANY UI BUTTON
// import {
//   FacebookLoginButton,
//   GoogleLoginButton,
// } from "react-social-login-buttons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "../styles/Register.module.css";
import { NavLink } from "react-router-dom";

function Register() {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState(null);

  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("Logged out successfully");
  }, []);

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
          <p className={style.cardTitle}>Join the Gtext Community!</p>
          <p>Start Your journey to financial growth today.</p>
        </div>

        <form action="" className={style.action}>
          <div className={style.input}>
            <label htmlFor="">First Name</label>
            <input
              type="text"
              required
              className={style.inputs}
              placeholder="Enter Your First Name"
            />
          </div>

          <div className={style.input}>
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              required
              className={style.inputs}
              placeholder="Enter Your Last Name"
            />
          </div>

          <div className={style.input}>
            <label htmlFor="">Email</label>
            <input
              type="text"
              required
              className={style.inputs}
              placeholder="Enter Your Email"
            />
          </div>

          <div className={style.input}>
            <label htmlFor="">Password</label>
            <input
              type="text"
              required
              className={style.inputs}
              placeholder="Enter Your Password"
            />
          </div>

          <div className={style.input}>
            <label htmlFor="">Confirm Password</label>
            <input
              type="text"
              required
              className={style.inputs}
              placeholder="Confirm Your Password"
            />
          </div>

          <button className={style.investConsult3}> 
            <NavLink to="/login"> Sign Up</NavLink>{" "}
          </button>
        </form>

        <div className={style.hrsign}>
          <hr className={style.horiz} />
          <p>Or sign up with</p>
          <hr className={style.horiz} />
        </div>

        {provider && profile ? (
          <User
            provider={provider}
            profile={profile}
            onLogout={onLogoutSuccess}
          />
        ) : (
          <div className={style.socials}>
            <LoginSocialGoogle
              isOnlyGetToken
              client_id={process.env.REACT_APP_GG_APP_ID || ""}
              onLoginStart={onLoginStart}
              onResolve={handleLoginResolve}
              onReject={handleLoginReject}
            >
              <div className={style.social}>
                <img src="./images/Google.png" alt="Googl" className={style.socio} />
                <p>Google</p>
              </div>
              {/* <GoogleLoginButton /> */}
            </LoginSocialGoogle>

            <LoginSocialFacebook
              isOnlyGetToken
              appId={process.env.REACT_APP_FB_APP_ID || ""}
              onLoginStart={onLoginStart}
              onResolve={handleLoginResolve}
              onReject={handleLoginReject}
            >
              <div className={style.social}>
                <img src="./images/FB.png" alt="FB" className={style.socio} />
                <p>Facebook</p>
              </div>
              {/* <FacebookLoginButton /> */}
            </LoginSocialFacebook>
          </div>
        )}

        <div className={style.navUl}>
          <p>Already have an account? </p>

          <li className={style.navLi}>
            <NavLink to="/login">Log in</NavLink>
          </li>
        </div>

        <div className={style.linav}>
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

export default Register;

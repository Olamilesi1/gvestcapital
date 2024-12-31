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
          <p className={style.cardTitle}>Welcome Back</p>
          <p>Log in to access your personalized investment dashboard.</p>
        </div>

        <form action="" className={style.action}>
          <div className={style.input}>
            <label htmlFor="">Email</label>
            <input
              type="text"
              required
              className={style.inputs}
              placeholder="Enter Your Email"
            />
          </div>

          <div className={style.textInputs}>
            <label htmlFor="">Password</label>
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

          <div className={style.forgt}>
            <div className={style.checkme}>
              <input type="checkbox" name="" id="" />
              <p>Remember Me</p>
            </div>

            <li className={style.navLi}>
              <NavLink to="/forgot-password">Forgot Password</NavLink>
            </li>
          </div>

          <button className={style.investConsult3}>
            <NavLink to="/">Login</NavLink>{" "}
          </button>
        </form>

        <div className={style.hrsign}>
          <hr className={style.horiz} />
          <p>Or login with</p>
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
                <img
                  src="./images/Google.png"
                  alt="Googl"
                  className={style.socio}
                />
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
          <p>New here? </p>

          <li className={style.navLi}>
            <NavLink to="/sign-up">Create an Account</NavLink>
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

export default Login;

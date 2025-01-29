import React, { useContext, useState, useEffect, useCallback } from "react";
import { User } from "../components/User";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import { useUser } from "../components/UserContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput";
import { TailSpin } from "react-loader-spinner";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "../styles/Register.module.css";

function Login() {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState(null);
  const { setUsername } = useContext(useUser); // Access UserContext
  const [showPassword, setShowPassword] = useState(false); // Password visibility toggle
  const navigate = useNavigate();

  // Validation schema for Formik
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const API_URL = process.env.REACT_APP_API_URL;
      const response = await axios.post(
        "http://localhost:4000/user/login",
        values
      );

      const { userData, authToken: token } = response.data;

      if (token && userData.username) {
        // Save token and username in localStorage
        localStorage.setItem("userAuthToken", token);
        localStorage.setItem("userUsername", userData.username);


  // Debugging logs
  console.log("Token saved:", localStorage.getItem("userAuthToken"));
  console.log("Username saved:", localStorage.getItem("userUsername"));
  
        // Update context
        setUsername(userData.username);
        toast.success("Login successful!", { autoClose: 2000 });

        // Navigate to dashboard
        setTimeout(() => {
          navigate("/user/dashboard");
        }, 3000);
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed! Please check your credentials.");
    } finally {
      setSubmitting(false); // Reset the form submission state
    }
  };

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
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div className={style.register}>
        <div className={style.registerForm}>
          <div className={style.Para}>
            <p className={style.cardTitle}>Welcome Back</p>
            <p>Log in to access your personalized investment dashboard.</p>
          </div>

          <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className={style.action}>
                <div className={style.textInputs}>
                  <h4 className={style.label}>Email</h4>
                  <div className={style.inputP}>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      component={TextInput}
                      ariaLabel="Enter Your Email"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    style={{ color: "red" }}
                  />
                </div>

                <div>
                  <div
                    className={style.textInputs}
                    style={{ position: "relative" }}
                  >
                    <h4 className={style.label}>Password</h4>
                    <div className={style.pass}>
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter Your Password"
                        component={TextInput}
                        style={{ position: "relative" }}
                        ariaLabel="Enter Your Password"
                      />
                      <span
                        onClick={togglePasswordVisibility}
                        className="material-symbols-outlined"
                      >
                        {showPassword ? "visibility" : "visibility_off"}
                      </span>
                    </div>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    style={{ color: "red" }}
                  />
                </div>
                
                {/* <div>
                  <div
                    className={style.textInputs}
                    style={{ position: "relative" }}
                  >
                    <h4 className={style.label}>Password</h4>
                    <div className={style.inputP}>
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter Your Password"
                        component={TextInput}
                        style={{ position: "relative" }}
                        ariaLabel="Enter Your Password"
                      />

                      <span
                        onClick={togglePasswordVisibility}
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "52%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}
                      >
                        {showPassword ? "👁️" : "🙈"}
                      </span>
                    </div>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    style={{ color: "red" }}
                  />
                </div> */}

                <div className={style.forgt}>
                  <div className={style.checkme}>
                    <input type="checkbox" name="" id="" />
                    <p>Remember Me</p>
                  </div>

                  <li className={style.navLi}>
                    <NavLink to="/forgot-password">Forgot Password</NavLink>
                  </li>
                </div>

                <div className={style.btn}>
                  <button
                    type="submit"
                    className={style.investConsult3}
                    aria-label="Login"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <TailSpin // Use react-loader-spinner
                        height="20"
                        width="20"
                        color="#fff"
                        ariaLabel="loading"
                      />
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>

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
              <NavLink to="/register">Create an Account</NavLink>
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
      </div>
    </>
  );
}

export default Login;

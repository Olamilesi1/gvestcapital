import React, { useContext, useState, useEffect, useCallback } from "react";
import { User } from "../../components/User";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TailSpin } from "react-loader-spinner"; // Import spinner
import style from "../../styles/Register.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import TextInput from "../../components/TextInput";
import { useAdmin } from "../../components/AdminContext";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Register() {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState(null);
  const { setUsername } = useContext(useAdmin); // Access setUsername from UserContext
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Hook to navigate programmatically
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("User name is required")
      .min(5, "User name must be at least 5 characters"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be at least 8 characters")
      .required("Password is required")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/\d/, "Password must contain at least one digit"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  useEffect(() => {
    const storedUsername = localStorage.getItem("adminUsername");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  // Admin Handle form submission
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    const { confirmPassword, ...adminData } = values; // Exclude confirmPassword
    try {
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
      const response = await axios.post(
        `${API_BASE_URL}/admin/register`,
        values
      );

      console.log(response.data);

      // Save username globally using local storage UserContext

      setUsername(values.username);

      // Display success message using toastify
      toast.success("Registration successful", { autoClose: 2000 });
      console.log("Submitting data:", values);
      // Redirect to the login page after a short delay
      setTimeout(() => {
        navigate("/admin/login");
      }, 2000); // Delay for 2 seconds before redirecting
    } catch (error) {
      // console.error("Registration error:", error);
      // toast.error("Registration failed!");
      console.error("Registration error:", error.response || error.message);
      toast.error(
        error.response?.data?.message ||
          "Registration failed! Please try again."
      );
    } finally {
      setSubmitting(false); // Reset the form submission state
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
    window.location.href = "/admin/dashboard";
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
            <p className={style.cardTitle}>Join the Gtext Community!</p>
            <p>Start Your journey to financial growth today.</p>
          </div>

          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className={style.action}>
                <div className={style.textInputs}>
                  <h4 className={style.label}>First Name</h4>
                  <div className={style.inputP}>
                    <Field
                      type="text"
                      name="username"
                      component={TextInput}
                      placeholder="Enter Your User Name"
                      ariaLabel="Enter Your User Name"
                    />
                  </div>
                  <ErrorMessage
                    name="username"
                    component="div"
                    style={{ color: "red" }}
                  />
                </div>

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

                <div>
                  <div
                    className={style.textInputs}
                    style={{ position: "relative" }}
                  >
                    <h4 className={style.label}>Confirm Password</h4>

                    <div className={style.pass}>
                      <Field
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Your Password"
                        component={TextInput}
                        style={{ position: "relative" }}
                        ariaLabel="Confirm Your Password"
                      />
                      <span
                        onClick={toggleConfirmPasswordVisibility}
                        className="material-symbols-outlined"
                      >
                        {showConfirmPassword ? "visibility" : "visibility_off"}
                      </span>
                    </div>
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    style={{ color: "red" }}
                  />
                </div>

                <div className={style.btn}>
                  <button
                    type="submit"
                    className={style.investConsult3}
                    aria-label="Register"
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
                      "Sign Up"
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <ToastContainer />

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
                  <img
                    src="/images/Google.png"
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
                  <img src="/images/FB.png" alt="FB" className={style.socio} />
                  <p>Facebook</p>
                </div>
                {/* <FacebookLoginButton /> */}
              </LoginSocialFacebook>
            </div>
          )}

          <div className={style.navUl}>
            <p>Already have an account? </p>

            <li className={style.navLi}>
              <NavLink to="/admin/login">Log in</NavLink>
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

export default Register;

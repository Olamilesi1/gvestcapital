import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "../styles/Register.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function VerifyEmail() {
  const [verificationToken, setVerificationToken] = useState("");
  const [loading, setLoading] = useState(false); // To show loading state
  const navigate = useNavigate();

  // const handleVerification = async () => {
  //   setLoading(true); // Start loading state
  //   try {
  //     const email = localStorage.getItem("userEmail"); // Assuming the email is saved during registration
  //     const verificationToken = localStorage.getItem("VerifyToken"); // Assuming the email is saved during registration

  //     console.log("Email:", localStorage.getItem("userEmail"));
  //     console.log("Verification Token:", verificationToken);

  //     // Add a check to ensure that both values are present
  //   if (!email || !verificationToken) {
  //       throw new Error("Missing email or verification token.");
  //     }
      
  //     const response = await axios.post(
  //       "http://localhost:4000/user/verify-email",
  //       { email, verificationToken }
  //     );

  //     // Show success toast
  //     toast.success("Email verified successfully!", { autoClose: 2000 });

  //     // Redirect to login page
  //     setTimeout(() => {
  //       navigate("/login");
  //     }, 2000);
  //   } catch (error) {
  //     console.error("Verification error:", error.response || error.message);
  //     toast.error(
  //       error.response?.data?.message ||
  //         "Verification failed! Please try again."
  //     );
  //   } finally {
  //     setLoading(false); // End loading state
  //   }
  // };

  const handleVerification = async () => {
    setLoading(true);
    try {
      const email = localStorage.getItem("userEmail");
  
      if (!email || !verificationToken) {
        throw new Error("Missing email or verification token.");
      }
  
      const response = await axios.post(
        "http://localhost:4000/user/verify-email",
        { email, verificationToken } // Use the state value, not localStorage
      );
  
      toast.success("Email verified successfully!", { autoClose: 2000 });
  
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Verification error:", error.response || error.message);
      toast.error(
        error.response?.data?.message || "Verification failed! Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <div className={style.register}>
        <div className={style.Para}>
          <p className={style.cardTitle}>Email Verification Code</p>
          <p>Enter the verification code we sent to your email:</p>
        </div>

        <form action="" className={style.actionV}>
          <div className={style.inputV}>
            <input
              type="text"
              value={verificationToken}
              onChange={(e) => setVerificationToken(e.target.value)}
              required
              className={style.inputsV}
            />
          </div>

          <button
            type="button"
            onClick={handleVerification}
            className={style.investConsult4}
            disabled={loading} // Disable the button while loading
          >
            {loading ? "Verifying..." : "Submit"}
          </button>
        </form>

        <div className={style.linav1}>
          <p className={style.vest}>@ 2024 Gvest. All rights reserved. </p>

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
            <ToastContainer/>
    </>
  );
}

export default VerifyEmail;

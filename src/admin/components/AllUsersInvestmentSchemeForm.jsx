import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import style from "../styles/addinvest.module.css";

function AdminInvestmentSchemeForm() {
  const [investmentData, setInvestmentData] = useState({
    investmentId: "",
    type: "",
    username: "",
    nextRoiDate: "",
    paymentMethod: "",
    amountPaid: "",
    status: "",
    roi: "",
  });

  const handleChange = (e) => {
    setInvestmentData({ ...investmentData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  //     const token = localStorage.getItem("adminAuthToken");

  //     await axios.post(
  //       `${API_BASE_URL}/admin/add-investment-scheme`,
  //       investmentData,
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );

  //     toast.success("Investment scheme added successfully!");
  //     setInvestmentData({
  //       username: "",
  //       investmentId: "",
  //       type: "",
  //       nextRoiDate: "",
  //       paymentMethod: "",
  //       status: "",
  //       amountPaid: "",
  //     });
  //   } catch (error) {
  //     console.error("Error adding investment scheme", error);
  //     toast.error("Failed to add investment scheme.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
      const token = localStorage.getItem("adminAuthToken");
  
      const investmentPayload = {
        username: investmentData.username,
        roi: investmentData.roi,
        investmentId: investmentData.investmentId,
        type: investmentData.type,
        amountPaid: investmentData.amountPaid ? Number(investmentData.amountPaid) : 0, // Ensure it's a number
        nextRoiDate: investmentData.nextRoiDate,
        paymentMethod: investmentData.paymentMethod,
        status: investmentData.status,
        dateInvested: new Date().toISOString(), // Automatically add current date
      };

      console.log("Investment Payload:", investmentPayload);

  
      await axios.post(
        `${API_BASE_URL}/admin/add-investment-scheme`,
        investmentPayload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
  
      toast.success("Investment scheme added successfully!");
      setInvestmentData({
        username: "",
        investmentId: "",
        type: "",
        amountPaid: "",
        nextRoiDate: "",
        paymentMethod: "",
        status: "",
        roi: "",
      });

   
    } catch (error) {
      console.error("Error adding investment scheme", error);
      toast.error(
        error.response?.data?.message || "Failed to add investment scheme."
      );
    }
  };
  
  return (
    <div className={style.formContainer}>
      <ToastContainer />
      <h2>Add User Investment Scheme Investment</h2>

      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="text"
          name="investmentId"
          placeholder="Investment ID"
          value={investmentData.investmentId}
          onChange={handleChange}
          required
          className={style.input}
        />
        <select
          name="type"
          value={investmentData.type}
          onChange={handleChange}
          required
          className={style.input}
        >
          <option value="">Select Investment Type</option>
          <option value="5million">5 Million</option>
          <option value="8million">8 Million</option>
          <option value="10million">10 Million</option>
        </select>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={investmentData.username}
          onChange={handleChange}
          required
          className={style.input}
        />
        {/* <input
          type="email"
          name="userEmail"
          placeholder="User Email"
          value={investmentData.userEmail}
          onChange={handleChange}
          required
          className={style.input}
        /> */}
        <input
          type="number"
          name="amountPaid"
          placeholder="Amount Paid"
          value={investmentData.amountPaid}
          onChange={handleChange}
          required
          className={style.input}
        />
        <input
          type="number"
          name="roi"
          placeholder="Enter User Roi"
          value={investmentData.roi}
          onChange={handleChange}
          required
          className={style.input}
        />
        {/* <input
          type="date"
          name="dateInvested"
          value={investmentData.dateInvested}
          onChange={handleChange}
          required
          className={style.input}
        /> */}
        <input
          type="date"
          name="nextRoiDate"
          value={investmentData.nextRoiDate}
          onChange={handleChange}
          required
          className={style.input}
        />
        <select
          name="paymentMethod"
          value={investmentData.paymentMethod}
          onChange={handleChange}
          required
          className={style.input}
        >
          <option value="">Select Payment Method</option>
          <option value="Bank transfer">Bank Transfer</option>
          <option value="Wallet">Wallet</option>
        </select>
        <select
          name="status"
          value={investmentData.status}
          onChange={handleChange}
          required
          className={style.input}
        >
          <option value="">Select Status</option>
          <option value="Completed">Completed</option>
          <option value="Not completed">Not Completed</option>
        </select>
        <button type="submit" className={style.send}>Submit Investment</button>
      </form>
    </div>
  );
}

export default AdminInvestmentSchemeForm;

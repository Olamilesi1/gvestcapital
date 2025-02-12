import {NavLink, useNavigate} from 'react-router-dom'
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import style from "../styles/addinvest.module.css";

function AdminPropertyInvestmentForm() {
  const [investmentData, setInvestmentData] = useState({
    investmentId: "",
    type: "",
    amountPaid: "",
    username: "",
    userEmail: "",
    dateInvested: "",
    description: "",
    paymentMethod: "",
    status: "",
  });

  const handleChange = (e) => {
    setInvestmentData({ ...investmentData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
      const token = localStorage.getItem("adminAuthToken");
  
      await axios.post(
        `${API_BASE_URL}/admin/add-property-investment`,
        {
          username: investmentData.username, // Send username instead of userId
          investmentId: investmentData.investmentId,
          type: investmentData.type,
          amountPaid: investmentData.amountPaid,
          description: investmentData.description,
          paymentMethod: investmentData.paymentMethod,
          status: investmentData.status,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
  
      toast.success("Property investment added successfully!");
      setInvestmentData({
        investmentId: "",
        type: "",
        amountPaid: "",
        username: "",
        dateInvested: "",
        description: "",
        paymentMethod: "",
        status: "",
      });
    } catch (error) {
      console.error("Error adding investment", error);
      toast.error("Failed to add investment.");
    }
  };
  
  return (
    <div className={style.formContainer}>
      <ToastContainer />
      <h2>Add Property Investment</h2>
      
      <div className={style.schemes}>
                <button className={style.scheme}>
                
                  <NavLink
                    className={({ isActive }) => (isActive ? style.active : "")}
                    to="/admin/add-propertyinvest"
                  > 
                    <span>Add Property Investment</span>
                   </NavLink>
                </button>

                <button className={style.scheme2}>
               
                  <NavLink
                    className={({ isActive }) => (isActive ? style.active : "")}
                    to="/admin/add-investscheme"
                  > 
                    <span>Add Investment Scheme</span>
                  </NavLink>
                </button>
              </div>
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

        <select name="type" value={investmentData.type} onChange={handleChange} className={style.input} required>
          <option value="">Select Type</option>
          <option value="Bought Land">Bought Land</option>
          <option value="Bought House">Bought House</option>
          <option value="Bought Fractional Ownership">Bought Fractional Ownership</option>
        </select>

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
          type="date"
          name="dateInvested"
          value={investmentData.dateInvested}
          onChange={handleChange}
          required
          className={style.input}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={investmentData.description}
          onChange={handleChange}
          required
          className={style.input}
        />
        <select name="paymentMethod" value={investmentData.paymentMethod} onChange={handleChange} required className={style.input}>
          <option value="">Select Payment Method</option>
          <option value="Bank Transfer">Bank Transfer</option>
          <option value="Wallet">Wallet</option>
        </select>
        <select name="status" value={investmentData.status} onChange={handleChange} className={style.input} required>
          <option value="">Select Status</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
        <button type="submit" className={style.send}>Submit Investment</button>
      </form>
    </div>
  );
}

export default AdminPropertyInvestmentForm;

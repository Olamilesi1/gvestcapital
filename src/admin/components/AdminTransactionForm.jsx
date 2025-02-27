import React, { useState } from "react";
import axios from "axios";

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    amount: "",
    currency: "",
    description: "",
    email: "",
    method: "",
    type: "",
    status: "",
    investmentName: "",
    investmentDuration: "",
    paymentIntentId: "", // Add status field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  //     const response = await axios.post(
  //       `${API_BASE_URL}/admin/admin-transaction`,
  //       formData
  //     );
  //     alert("Transaction posted successfully!");
  //     // Optionally, reset the form
  //     setFormData({
  //       username: "",
  //       amount: "",
  //       currency: "",
  //       email: "",
  //       description: "",
  //       method: "",
  //       status: "", // Reset status
  //       paymentIntentId: "",
  //       investmentName: "",
  //       investmentDuration: "",
  //     });
  //   } catch (error) {
  //     console.error("Error posting transaction:", error);
  //     alert("Failed to post transaction.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting transaction:", formData); // Debugging line
  
    try {
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
      const token = localStorage.getItem("adminAuthToken"); // Retrieve token from localStorage
  
      if (!token) {
        console.error("No auth token found!");
        alert("Unauthorized: No auth token found.");
        return;
      }
  
      const response = await axios.post(
        `${API_BASE_URL}/admin/admin-transaction`,
        formData,  
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Send token properly
            "Content-Type": "application/json", // Ensure JSON content type
          },
        }
      );
  
      alert("Transaction posted successfully!");
      setFormData({
        username: "",
        amount: "",
        currency: "",
        email: "",
        description: "",
        method: "",
        status: "",
        paymentIntentId: "",
        type: "",
      });
    } catch (error) {
      console.error("Error posting transaction:", error);
      alert("Failed to post transaction.");
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
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
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
      {/* <div>
        <label>Investment Duration:</label>
        <textarea
          name="investmentDuration"
          value={formData.investmentDuration}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Investment Name:</label>
        <textarea
          name="investmentName"
          value={formData.investmentName}
          onChange={handleChange}
          required
        />
      </div> */}
      <div>
        <label>Investment Type:</label>
        <textarea
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Currency:</label>
        <select
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          required
        >
          <option value="">Select Currency</option>
          <option value="$">$</option>
          <option value="eur">EUR</option>
          {/* Add other currencies as needed */}
        </select>
      </div>

      <div>
        <label>Method:</label>
        <input
          type="text"
          name="method"
          value={formData.method}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="">Select Status</option>
          <option value="completed">Completed</option>
          <option value="pending">Not Completed</option>
          {/* Add other currencies as needed */}
        </select>
      </div>
      <div>
        <label>Payment Intent ID:</label>
        <input
          type="text"
          name="paymentIntentId"
          value={formData.paymentIntentId}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Post Transaction</button>
    </form>
  );
};

export default TransactionForm;

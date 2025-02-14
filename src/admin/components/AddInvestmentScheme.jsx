// import style from "../styles/addinvest.module.css";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import { useHeader } from "../../components/HeaderContext";
// import "react-toastify/dist/ReactToastify.css";
// import { useAdmin } from "../../components/AdminContext";
// import {NavLink, useNavigate} from 'react-router-dom'
// import { useContext, useState, useEffect } from "react";

// function AdminInvestmentScheme() {
//   return (
//     <>
//       <div className={style.investScheme}>
//         <link
//           rel="stylesheet"
//           href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
//         />

//         <p className={style.pHead}>Investment Plan Detail</p>

//         <div className={style.schemes}>
//           <button className={style.scheme}> <NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/admin/add-invest' ><span>Investment Scheme</span></NavLink></button>
//           <button className={style.scheme2}> <NavLink  className={({ isActive }) => (isActive ? style.active : "")} to='/admin/add-property' ><span>Property Scheme</span></NavLink></button>
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             Title
//           </label>
//           <input
//             type="text"
//             name=""
//             id=""
//             placeholder="Enter investment title. Min 3 Character"
//             className={style.input}
//           />
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             Description
//           </label>
//           <input
//             type="text"
//             name=""
//             id=""
//             placeholder="Enter investment description. Min 3 Character"
//             className={style.input}
//           />
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             Select Currency
//           </label>
//           <select name="" id="" className={style.input}>
//             <option value="">NGN</option>
//             <option value="">Dollar</option>
//           </select>
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             Investment Start Date
//           </label>
//           <input
//             type="date"
//             name=""
//             id=""
//             placeholder="12/02/2025"
//             className={style.input}
//           />
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             Investment End Date
//           </label>
//           <input
//             type="date"
//             name=""
//             id=""
//             placeholder="12/02/2028"
//             className={style.input}
//           />
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             Investment Option
//           </label>
//           <select name="" id="" className={style.input}>
//             <option value="">Buy Invest</option>
//             <option value="">Buy House</option>
//           </select>
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             Duration
//           </label>
//           <input
//             type="text"
//             name=""
//             id=""
//             placeholder="24 Months"
//             className={style.input}
//           />
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             ROI Percentage
//           </label>
//           <input
//             type="text"
//             name=""
//             id=""
//             placeholder="Enter your ROI percentage"
//             className={style.input}
//           />
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             Investment Year
//           </label>
//           <input
//             type="text"
//             name=""
//             id=""
//             placeholder="100"
//             className={style.input}
//           />
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             ROI Type
//           </label>
//           <select name="" id="" className={style.input}>
//             <option value="">Simple Interest</option>
//             <option value="">Buy House</option>
//           </select>
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             ROI Percentage
//           </label>
//           <input
//             type="text"
//             name=""
//             id=""
//             placeholder="Enter your ROI percentage"
//             className={style.input}
//           />
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             Amount
//           </label>
//           <input
//             type="text"
//             name=""
//             id=""
//             placeholder="100"
//             className={style.input}
//           />
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             Type
//           </label>
//           <select name="" id="" className={style.input}>
//             <option value="">Buy Land</option>
//             <option value="">Buy House</option>
//           </select>
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             Investment Year
//           </label>
//           <input
//             type="text"
//             name=""
//             id=""
//             placeholder="100"
//             className={style.input}
//           />
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//            Attach File (png, jpeg, etc)
//           </label>
//           <input
//             type="file"
//             name=""
//             id=""
//              accept="image/*"
//             placeholder="Click to Upload or Drag & Drop a File"
//             className={style.inputFill}
//           />
//         </div>

//         <button className={style.send}>
//           Send{" "}
//           <span class="material-symbols-outlined">keyboard_arrow_right</span>{" "}
//         </button>
//       </div>
//     </>
//   );
// }

// export default AdminInvestmentScheme;

import { useState } from "react";
import axios from "axios";

function InvestmentForm() {
  const [investment, setInvestment] = useState({
    investmentAmount: "",
    duration: "",
    roiPercentage: "",
    roi: "",
    currency: "",
    investmentType: "",
    investmentStartDate: "",
    investmentEndDate: "",
  });

  const handleChange = (e) => {
    setInvestment({ ...investment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Ensure this is within an event handler
    try {
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
      const response = await axios.post(
        `${API_BASE_URL}/admin/investmentscheme`,
        investment // Send the state data
      );

      alert("Investment Scheme Created Successfully");
      setInvestment({
        investmentAmount: "",
        duration: "",
        roiPercentage: "",
        roi: "",
        currency: "",
        investmentType: "",
        investmentStartDate: "",
        investmentEndDate: "",
      });
    } catch (error) {
      console.error("Error creating investment scheme:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="investmentAmount"
        placeholder="Investment Amount"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="duration"
        placeholder="Duration (Years)"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="roiPercentage"
        placeholder="ROI %"
        onChange={handleChange}
      />
      <input
        type="number"
        name="roi"
        placeholder="ROI"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="currency"
        placeholder="Currency"
        onChange={handleChange}
      />
      <input
        type="text"
        name="investmentType"
        placeholder="Investment Type"
        onChange={handleChange}
      />
      <input
        type="date"
        name="investmentStartDate"
        placeholder="investmentStartDate"
        onChange={handleChange}
      />
      <input
        type="date"
        name="investmentEndDate"
        placeholder="investmentEndDate"
        onChange={handleChange}
      />
      <button type="submit">Create Investment Scheme</button>
    </form>
  );
}

export default InvestmentForm;

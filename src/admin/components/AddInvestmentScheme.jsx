// import style from "../styles/addinvest.module.css";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import { useHeader } from "../../components/HeaderContext";
// import "react-toastify/dist/ReactToastify.css";
// import { useAdmin } from "../../components/AdminContext";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useContext, useState, useEffect } from "react";

// function AdminInvestmentScheme() {
//   const [investment, setInvestment] = useState({
//     investmentAmount: "",
//     duration: "",
//     roiPercentage: "",
//     roi: "",
//     currency: "",
//     investmentType: "",
//     investmentStartDate: "",
//     investmentEndDate: "",
//   });

//   const handleChange = (e) => {
//     setInvestment({ ...investment, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Ensure this is within an event handler
//     try {
//       const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
//       const response = await axios.post(
//         `${API_BASE_URL}/admin/investmentscheme`,
//         investment // Send the state data
//       );

//       alert("Investment Scheme Created Successfully");
//       setInvestment({
//         investmentAmount: "",
//         duration: "",
//         roiPercentage: "",
//         roi: "",
//         currency: "",
//         investmentType: "",
//         investmentStartDate: "",
//         investmentEndDate: "",
//       });
//     } catch (error) {
//       console.error("Error creating investment scheme:", error);
//     }
//   };

//   return (
//     <>
//       <form className={style.investScheme} onSubmit={handleSubmit}>
//         <link
//           rel="stylesheet"
//           href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
//         />

//         <p className={style.pHead}> Add Investment Detail</p>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             Title
//           </label>
//           <input
//             className={style.input}
//             type="number"
//             name="investmentAmount"
//             placeholder="Investment Amount"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             Duration
//           </label>
//           <input
//             className={style.input}
//             type="text"
//             name="duration"
//             placeholder="Duration (Years)"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             Select Currency
//           </label>
//           {/* <select name="" id="" className={style.input }>
//             <option value="">NGN</option>
//             <option value="">Dollar</option>
//           </select> */}

//           <input
//             className={style.input}
//             type="text"
//             name="currency"
//             placeholder="Currency"
//             onChange={handleChange}
//           />
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             Investment Start Date
//           </label>
//           <input
//             className={style.input}
//             type="date"
//             name="investmentStartDate"
//             placeholder="investmentStartDate"
//             onChange={handleChange}
//           />
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             Investment End Date
//           </label>
//           <input
//             className={style.input}
//             type="date"
//             name="investmentEndDate"
//             placeholder="investmentEndDate"
//             onChange={handleChange}
//           />
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             Investment Type
//           </label>
//           <input
//             className={style.input}
//             type="text"
//             name="investmentType"
//             placeholder="Investment Type"
//             onChange={handleChange}
//           />
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             ROI Percentage
//           </label>
//           <input
//             className={style.input}
//             type="text"
//             name="roiPercentage"
//             placeholder="ROI %"
//             onChange={handleChange}
//           />
//         </div>

//         <div className={style.labe}>
//           <label className={style.lab} htmlFor="">
//             ROI
//           </label>
//           <input
//             className={style.input}
//             type="number"
//             name="roi"
//             placeholder="ROI"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button className={style.send} type="submit">
//           Create Investment Scheme
//           <span class="material-symbols-outlined">
//             keyboard_arrow_right
//           </span>{" "}
//         </button>
//       </form>
//     </>
//   );
// }

// export default AdminInvestmentScheme;


import { useState } from "react";
import axios from "axios";
import style from "../styles/addinvest.module.css";

function AdminInvestmentScheme() {
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [currency, setCurrency] = useState("$");
  const [investmentType, setInvestmentType] = useState("");
  const [durations, setDurations] = useState([]);
  const [duration, setDuration] = useState("");
  const [roiPercentage, setRoiPercentage] = useState("");

  const handleAddDuration = () => {
    if (duration && roiPercentage) {
      const roi = (investmentAmount * roiPercentage) / 100;
      setDurations([...durations, { duration, roiPercentage, roi }]);
      setDuration("");
      setRoiPercentage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
      const res = await axios.post(`${API_BASE_URL}/admin/investmentscheme`, {
        investmentAmount,
        currency,
        investmentType,
        durations,
      });
      alert("Investment Scheme Created Successfully!");
      setInvestmentAmount("");
      setInvestmentType("");
      setDurations([]);
    } catch (error) {
      console.error("Error posting investment scheme:", error);
    }
  };

  return (
    <div className={style.componentContent}>
      <h2>Create Investment Scheme</h2>
      <form onSubmit={handleSubmit}>
        <label>Investment Amount:</label>
        <input
          type="number"
          value={investmentAmount}
          onChange={(e) => setInvestmentAmount(e.target.value)}
          required
        />

        <label>Currency:</label>
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="$">$</option>
          <option value="EUR">EUR</option>
          <option value="#">NGN</option>
        </select>

        <label>Investment Type:</label>
        <input
          type="text"
          value={investmentType}
          onChange={(e) => setInvestmentType(e.target.value)}
          required
        />

        <label>Investment Durations & ROI:</label>
        <div className={style.durationInput}>
          <input
            type="text"
            placeholder="Duration (e.g., 1 Year)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <input
            type="number"
            placeholder="ROI Percentage"
            value={roiPercentage}
            onChange={(e) => setRoiPercentage(e.target.value)}
          />
          <button type="button" onClick={handleAddDuration}>
            Add
          </button>
        </div>

        {/* Display Added Durations */}
        <ul>
          {durations.map((d, index) => (
            <li key={index}>
              {d.duration} - {d.roiPercentage}% (ROI: {currency} {d.roi})
            </li>
          ))}
        </ul>

        <button type="submit">Create Investment</button>
      </form>
    </div>
  );
}

export default AdminInvestmentScheme;

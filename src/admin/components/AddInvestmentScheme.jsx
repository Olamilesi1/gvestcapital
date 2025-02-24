import { useState } from "react";
import axios from "axios";
import style from "../styles/addinvest.module.css";

function AdminInvestmentScheme() {
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [currency, setCurrency] = useState("ngn"); // Default to NGN
  const [investmentType, setInvestmentType] = useState("");
  const [durations, setDurations] = useState([]);
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [roiPercentage, setRoiPercentage] = useState("");

  const handleAddDuration = () => {
    const parsedDuration = parseInt(duration, 10);
    const parsedRoiPercentage = parseFloat(roiPercentage);
    const parsedInvestmentAmount = parseFloat(investmentAmount) || 0; // Ensure it's a number

    if (
      isNaN(parsedDuration) ||
      isNaN(parsedRoiPercentage) ||
      parsedDuration <= 0
    ) {
      alert("Please enter valid numeric values for duration and ROI.");
      return;
    }

    const roi = (parsedInvestmentAmount * parsedRoiPercentage) / 100;

    setDurations([
      ...durations,
      { duration: parsedDuration, roiPercentage: parsedRoiPercentage, roi },
    ]);
    setDuration("");
    setRoiPercentage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
      await axios.post(`${API_BASE_URL}/admin/investmentscheme`, {
        investmentAmount,
        currency,
        investmentType,
        durations,
        description,
      });
      alert("Investment Scheme Created Successfully!");
      setInvestmentAmount("");
      setInvestmentType("");
      setDurations([]);
      setDescription("");
    } catch (error) {
      console.error("Error posting investment scheme:", error);
    }
  };

  const formatCurrencySymbol = (currencyCode) => {
    switch (currencyCode.toLowerCase()) {
      case "ngn":
        return "₦";
      case "usd":
        return "$";
      case "eur":
        return "€";
      case "gbp":
        return "£";
      default:
        return currencyCode.toUpperCase();
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
          <option value="ngn">₦ (NGN)</option>
          <option value="usd">$ (USD)</option>
          <option value="eur">€ (EUR)</option>
          <option value="gbp">£ (GBP)</option>
        </select>

        <label>Investment Type:</label>
        <select
          value={investmentType}
          onChange={(e) => setInvestmentType(e.target.value)}
        >
          <option value="">Select Transaction Type</option>
          <option value="5million">5 Million Investment Option</option>
          <option value="8million">8 Million Investment Option</option>
          <option value="10million">10 Million Investment Option</option>
        </select>

        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Investment Scheme Description"
          rows={3}
        />

        <label>Investment Durations & ROI:</label>
        <div className={style.durationInput}>
          <input
            type="number"
            placeholder="Duration in Months (e.g., 12)"
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

        <ul>
          {durations.map((d, index) => (
            <li key={index}>
              {d.duration} Months - {d.roiPercentage}% (ROI:{" "}
              {formatCurrencySymbol(currency)} {d.roi.toFixed(2)})
            </li>
          ))}
        </ul>

        <button type="submit">Create Investment</button>
      </form>
    </div>
  );
}

export default AdminInvestmentScheme;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "../styles/addinvest.module.css";
function InvestmentSchemeDetail({ onClose }) {
  const { id } = useParams();
  const [investment, setInvestment] = useState(null);

  useEffect(() => {
    const fetchInvestment = async () => {
      try {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        const res = await axios.get(
          `${API_BASE_URL}/admin/one-investmentscheme/${id}`
        );
        setInvestment(res.data);
      } catch (error) {
        console.error("Error fetching investment:", error);
      }
    };
    fetchInvestment();
  }, [id]);

  if (!investment) return <p>Loading investment details...</p>;

  return (
    <div className="investment-detail">
      <h2>Investment Details</h2>
      <p>
        <strong>Type:</strong> {investment.investmentType}
      </p>
      <p>
        <strong>Amount:</strong> {investment.currency}{" "}
        {investment.investmentAmount}
      </p>
      <p>
        <strong>Duration:</strong> {investment.duration} years
      </p>
      <p>
        <strong>ROI Percentage:</strong> {investment.roiPercentage}%
      </p>
      <p>
        <strong>ROI:</strong> {investment.currency} {investment.roi}
      </p>
      <p>
        <strong>Start Date:</strong>{" "}
        {new Date(investment.investmentStartDate).toDateString()}
      </p>
      <p>
        <strong>End Date:</strong>{" "}
        {new Date(investment.investmentEndDate).toDateString()}
      </p>

      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default InvestmentSchemeDetail;

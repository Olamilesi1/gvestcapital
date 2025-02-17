import { useState, useEffect } from "react";
import axios from "axios";
import style from "../styles/addinvest.module.css";

function UserInvestments() {
  const [investments, setInvestments] = useState([]);
  const [selectedInvestment, setSelectedInvestment] = useState(null);

  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        const res = await axios.get(
          `${API_BASE_URL}/admin/all-investmentscheme`
        );
        setInvestments(res.data);
      } catch (error) {
        console.error("Error fetching investments:", error);
      }
    };
    fetchInvestments();
  }, []);

  const handleInvestmentSelect = (investment) => {
    setSelectedInvestment(investment);
  };

  const handleInvest = async (amount) => {
    try {
      // Redirect to Stripe payment
      window.location.href = `/checkout?amount=${amount}`;
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <div className={style.componentContent}>
      <h2>Invest and Grow Your Wealth</h2>
      <p>Select an investment amount to see details.</p>

      {/* Investment Amount Buttons */}
      <div className={style.amountButtons}>
        {investments.map((investment) => (
          <button
            key={investment._id}
            className={style.investmentButton}
            onClick={() => handleInvestmentSelect(investment)}
          >
            {investment.currency} {investment.investmentAmount}
          </button>
        ))}
      </div>

      {/* Display Investment Details on Selection */}
      {selectedInvestment && (
        <div className={style.outline}>
          <h3>
            Investment Details for {selectedInvestment.currency}{" "}
            {selectedInvestment.investmentAmount}
          </h3>

          <table className={style.table}>
            <thead>
              <tr>
                <th>Year</th>
                <th>ROI Percentage</th>
                <th>ROI</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {selectedInvestment.durations.map((duration, index) => (
                <tr key={index}>
                  <td>{duration.duration}</td>
                  <td>{duration.roiPercentage}%</td>
                  <td>
                    {selectedInvestment.currency} {duration.roi}
                  </td>
                  <td>
                    <button
                      className={style.scheme}
                      onClick={() =>
                        handleInvest(selectedInvestment.investmentAmount)
                      }
                    >
                      Invest
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UserInvestments;

import { useNavigate } from "react-router-dom";
import SideBar from "../components/UserSideBar";
import UserHeader from "../components/UserHeader";
import style from "../styles/userinvestments.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

import Transaction from "..//components/AddTransaction";
// import style from "../styles/addinvest.module.css";

function UserInvestments() {
  const [investments, setInvestments] = useState([]);
  // const [selectedInvestment, setSelectedInvestment] = useState(null);

  // const [showTransaction, setShowTransaction] = useState(false);
  const [selectedInvestment, setSelectedInvestment] = useState(null);

  const [showTransaction, setShowTransaction] = useState({
    show: false,
    transactionData: null,
  });

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

  // const handleInvestmentSelect = (investment) => {
  //   setSelectedInvestment(investment);
  // };

  const handleInvestmentSelect = (investment) => {
    const today = new Date(); // Get the current date
    const durationInMonths = investment.durations[0]?.duration || 12; // Duration in months

    // const nextRoiDate = new Date(
    //   today.getFullYear(),
    //   today.getMonth() + durationInMonths,
    //   today.getDate()
    // ); // Ensure correct month addition

    const nextRoiDate = new Date(today);
    nextRoiDate.setMonth(today.getMonth() + durationInMonths);
    if (nextRoiDate.getDate() !== today.getDate()) {
      nextRoiDate.setDate(0); // Set to last day of the month
    }

    setSelectedInvestment(investment);
  };

  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline1}>
            <div
              className={` ${showTransaction.show ? style.blurBackground : ""}`}
            >
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
                    {investment.investmentType}
                  </button>
                ))}
              </div>

              {/* Display Investment Details on Selection */}
              {selectedInvestment && (
                <div>
                  <h3>
                    Investment Details for {selectedInvestment.currency}{" "}
                    {selectedInvestment.investmentAmount}
                  </h3>

                  <table className={style.table}>
                    <thead>
                      <tr>
                        <th>Month</th>
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
                                setShowTransaction({
                                  show: true,
                                  transactionData: {
                                    amount: selectedInvestment.investmentAmount,
                                    currency: selectedInvestment.currency,
                                    description: selectedInvestment.description,
                                    type: selectedInvestment.investmentType,

                                    durations: selectedInvestment.durations, // ✅ Pass durations here
                                    roi: selectedInvestment.durations[0].roi, // Get first ROI as default
                                    nextRoiDate:
                                      selectedInvestment.durations[0]
                                        .nextRoiDate, // Get first next ROI date
                                  },
                                })
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

            {showTransaction.show && (
              <div className={style.modalOverlay}>
                <div className={style.transactionModal}>
                  <Transaction
                    transactionData={showTransaction.transactionData}
                  />
                  <button
                    className={style.closeButton}
                    onClick={() =>
                      setShowTransaction({ show: false, transactionData: null })
                    }
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInvestments;

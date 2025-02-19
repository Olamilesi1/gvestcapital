import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import SideBar from "./AdminSideBar";
import AdminHeader from "./AdminHeader";
import InvestmentDetailsModal from "./UserInvestmentDetailsModal"; // Modal for detailed view
import style from "../styles/addinvest.module.css";

function AdminInvestmentsTable() {
  const [propertyInvestments, setPropertyInvestments] = useState([]);
  const [investmentSchemes, setInvestmentSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedInvestment, setSelectedInvestment] = useState(null); // To store clicked investment details

  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        const token = localStorage.getItem("adminAuthToken");

        const response = await axios.get(
          `${API_BASE_URL}/admin/all-investments`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log("API Response:", response.data); // Debugging log

        // Ensure the response contains an array
        if (!Array.isArray(response.data)) {
          throw new Error("Invalid data format received");
        }

        // Extract investments from each user
        const allPropertyInvestments = response.data.flatMap((user) =>
          user.propertyInvestments.map((investment) => ({
            ...investment,
            username: user.username, // Add username to each investment
          }))
        );

        const allInvestmentSchemes = response.data.flatMap((user) =>
          user.investmentSchemes.map((investment) => ({
            ...investment,
            username: user.username, // Add username to each investment
          }))
        );

        // Debugging to see the extracted investments
        console.log("Extracted Property Investments:", allPropertyInvestments);
        console.log("Extracted Investment Schemes:", allInvestmentSchemes);

        setPropertyInvestments(allPropertyInvestments);
        setInvestmentSchemes(allInvestmentSchemes);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching investments:", err);
        setError("Failed to fetch investments.");
        toast.error("Failed to fetch investments.");
        setLoading(false);
      }
    };

    fetchInvestments();
  }, []);

  return (
    <div className={style.componentContent}>
      <ToastContainer />
      <SideBar />
      <div className={style.headerContent}>
        <AdminHeader />
        <div className={style.outline}>
          <h2>All Users' Investments</h2> <br />
          {loading ? (
            <p>Loading investments...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <>
              {/* Property Investments Table */}
              <h3>Property Investments</h3>
              <table>
                <thead>
                  <tr>
                    <th>Investment ID</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Username</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {propertyInvestments.map((investment) => (
                    <tr
                      key={investment.investmentId}
                      onClick={() => setSelectedInvestment(investment)}
                    >
                      <td>{investment.investmentId}</td>
                      <td>{investment.type}</td>
                      <td>{investment.amountPaid}</td>
                      <td>{investment.username}</td>
                      <td>{investment.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Investment Schemes Table */}
              <h3 className={style.shim}>Investment Schemes</h3>
              <table>
                <thead>
                  <tr>
                    <th>Investment ID</th>

                    <th>Amount</th>
                    <th>Next ROI Date</th>
                    <th>Username</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {investmentSchemes.map((investment) => (
                    <tr
                      key={investment.investmentId}
                      onClick={() => setSelectedInvestment(investment)}
                    >
                      <td>{investment.investmentId}</td>
                      <td>{investment.type}</td>
                      <td>{investment.nextRoiDate}</td>
                      <td>{investment.username}</td>
                      <td>{investment.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Modal for Investment Details */}
              {selectedInvestment && (
                <InvestmentDetailsModal
                  investment={selectedInvestment}
                  onClose={() => setSelectedInvestment(null)}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminInvestmentsTable;

import { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../components/UserSideBar";
import UserHeader from "../components/UserHeader";
import InvestmentDetailsModal from "../components/InvestmentDetailsModal"; // Modal for details
import style from "../styles/userinvestments.module.css";
import { toast, ToastContainer } from "react-toastify";
import TotalInvestment from "../components/TotalInvestment";
import TotalMonthlyInterest from "../components/TotalMonthlyInterest";
import TotalInvestedAmount from "../components/TotalInvestedAmount";

function UserInvestments({ username }) {
  const [investments, setInvestments] = useState({
    propertyInvestments: [],
    investmentSchemes: [],
  });
  const [searchQuery, setSearchQuery] = useState(""); // Search input
  const [filterType, setFilterType] = useState("All"); // Filter by type
  const [filterStatus, setFilterStatus] = useState("All"); // Filter by status
  const [selectedInvestment, setSelectedInvestment] = useState(null); // Selected investment details

  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        const token = localStorage.getItem("userAuthToken");
        const username = localStorage.getItem("userUsername");

        if (!username) {
          throw new Error("User name not found in localStorage");
        }

        // const response = await axios.get(`${API_BASE_URL}/user/user-investments/${username}`);
        const response = await axios.get(
          `${API_BASE_URL}/user/user-investments/${username}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log("User Investments:", response.data);
        // Ensure the response includes the expected structure
        if (
          !response.data.propertyInvestments ||
          !response.data.investmentSchemes
        ) {
          throw new Error("Invalid response format: missing investment data");
        }

        setInvestments(response.data);
      } catch (error) {
        console.error("Error fetching investments", error);
      }
    };

    fetchInvestments();
  }, [username]);

  const filterInvestments = (investmentList = []) => {
    return investmentList.filter((investment) => {
      const matchesSearch =
        investment.investmentId
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        investment.type?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        investment.status?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType =
        filterType === "All" || investment.type === filterType;
      const matchesStatus =
        filterStatus === "All" || investment.status === filterStatus;

      return matchesSearch && matchesType && matchesStatus;
    });
  };

  // ✅ Calculate totals
  const totalInvestmentAmount =
    investments.propertyInvestments.reduce(
      (sum, inv) => sum + inv.amountPaid,
      0
    ) +
    investments.investmentSchemes.reduce((sum, inv) => sum + inv.amountPaid, 0);

  const totalMonthlyInterest = investments.investmentSchemes.reduce(
    (sum, inv) => sum + (inv.roi|| 0),
    0
  );

  const totalInvestments =
    investments.propertyInvestments.length +
    investments.investmentSchemes.length;

  return (
    <div className={style.componentContent}>
      <ToastContainer />
      <SideBar />
      <div className={style.headerContent}>
        <UserHeader />

        <div className={style.outline}>
          <h2>My Investments</h2>

          {/* Search & Filter Controls */}
          <div className={style.filters}>
            <input
              type="text"
              placeholder="Search by ID, Type, or Status"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              onChange={(e) => setFilterType(e.target.value)}
              value={filterType}
            >
              <option value="All">All Types</option>
              <option value="Bought land">Bought Land</option>
              <option value="Bought house">Bought House</option>
              <option value="Bought fractional ownership">
                Fractional Ownership
              </option>
              <option value="5million">5 Million Plan</option>
              <option value="8million">8 Million Plan</option>
              <option value="10million">10 Million Plan</option>
            </select>
            <select
              onChange={(e) => setFilterStatus(e.target.value)}
              value={filterStatus}
            >
              <option value="All">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Not completed">Not Completed</option>
            </select>
          </div>

          {/* Property Investments Table */}
          <h3>Property Investments</h3>
          <table>
            <thead>
              <tr>
                <th>Investment ID</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filterInvestments(investments.propertyInvestments).map(
                (investment) => (
                  <tr
                    key={investment.investmentId}
                    onClick={() => setSelectedInvestment(investment)}
                  >
                    <td>{investment.investmentId}</td>
                    <td>{investment.type}</td>
                    <td>{investment.amountPaid}</td>
                    <td>{investment.status}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>

          {/* Investment Schemes Table */}
          <h3>Investment Schemes</h3>
          <table>
            <thead>
              <tr>
                <th>Investment ID</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Next ROI Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filterInvestments(investments.investmentSchemes).map(
                (investment) => (
                  <tr
                    key={investment.investmentId}
                    onClick={() => setSelectedInvestment(investment)}
                  >
                    <td>{investment.investmentId}</td>
                    <td>{investment.type}</td>
                    <td>{investment.amountPaid}</td>
                    <td>{investment.nextRoiDate}</td>
                    <td>{investment.status}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>

          {/* Modal for Investment Details */}
          {selectedInvestment && (
            <InvestmentDetailsModal
              investment={selectedInvestment}
              onClose={() => setSelectedInvestment(null)}
            />
          )}

          {/* <TotalInvestment totalInvestments={totalInvestments} />
          <TotalMonthlyInterest totalMonthlyInterest={totalMonthlyInterest} />
          <TotalInvestedAmount totalInvestmentAmount={totalInvestmentAmount} /> */}
        </div>
      </div>
    </div>
  );
}

export default UserInvestments;

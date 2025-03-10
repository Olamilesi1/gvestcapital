import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import style from "../styles/admindashboard.module.css";
import AdminUser from "../components/AdminUser"; // Import AdminUser component

function AdminUsers() {
  const [investors, setInvestors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState(null); // Track selected user

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        const token = localStorage.getItem("adminAuthToken");
        if (!token) {
          console.error("No token found. User might not be logged in.");
          return;
        }

        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        const response = await axios.get(
          `${API_BASE_URL}/admin/all-users`,
          // "http://localhost:4000/admin/all-users",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log("Investors:", response.data);
        setInvestors(response.data.userData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching investors:", err);
        setError("Failed to fetch investors.");
        toast.error("Failed to fetch investor data.");
        setLoading(false);
      }
    };

    fetchInvestors();
  }, []);

  return (
    <>
      <ToastContainer />

      <div className={style.outlines}>
        {selectedUser ? (
          <AdminUser user={selectedUser} goBack={() => setSelectedUser(null)} />
        ) : (
          <div className={style.users}>
            <div className={style.das}>
              {loading ? (
                <p>Loading investors...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Recent Payment</th>
                        <th>No of Investments</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      {investors.slice(0, 3).map((investor, index) => (
                        <tr key={index}>
                          <td>{investor.username}</td>
                          <td>{investor.email}</td>
                          <td>{investor.recentPayment}</td>
                          <td>{investor.investmentNumber}</td>
                          <td>
                            <button
                              className={style.edi}
                              onClick={() => setSelectedUser(investor)}
                            >
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AdminUsers;

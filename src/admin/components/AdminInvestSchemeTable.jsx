import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function AdminInvestSchemeTable() {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    fetchInvestments();
  }, []);

  const fetchInvestments = async () => {
    try {
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
      const response = await axios.get(
        `${API_BASE_URL}/admin/all-investmentscheme`
      );
      setInvestments(response.data); // Corrected the typo
    } catch (error) {
      console.error("Error fetching investments:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this investment?")) {
      try {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        const res = await axios.delete(
          `${API_BASE_URL}/admin/delete-invesmentscheme/${id}`
        );

        fetchInvestments();
      } catch (error) {
        console.error("Error deleting investment:", error);
      }
    }
  };

  return (
    <div>
      <h2>Investment Schemes</h2>
      {investments.map((investment) => (
        <div key={investment._id}>
          <h3>{investment.investmentType}</h3>
          <p>
            Amount: {investment.currency} {investment.investmentAmount}
          </p>
          <p>Duration: {investment.duration} years</p>
          <button onClick={() => handleDelete(investment._id)}>Delete</button>
          <Link to={`/admin/investmentscheme/${investment._id}`} >
              View Details
            </Link>
        </div>
      ))}
    </div>
  );
}

export default AdminInvestSchemeTable;




// import { useState } from "react";
// import InvestmentList from "./InvestmentList";
// import AdminInvestSchemeInfo from "./AdminInvestSchemeInfo";

// function AdminInvestSchemeTable() {
//   const [selectedInvestment, setSelectedInvestment] = useState(null);

//   return (
//     <div>
//       <h1>Admin Investment Schemes</h1>

//       {/* Pass onSelect function to InvestmentList */}
//       <InvestmentList onSelect={setSelectedInvestment} />

//       {/* Investment Details - Show only if an investment is selected */}
//       {selectedInvestment && (
//         <AdminInvestSchemeInfo 
//           investment={selectedInvestment} 
//           onClose={() => setSelectedInvestment(null)} 
//         />
//       )}
//     </div>
//   );
// }

// export default AdminInvestSchemeTable;


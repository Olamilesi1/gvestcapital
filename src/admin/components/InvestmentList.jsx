import style from "../styles/paymentlist.module.css";
function PaymentList() {
  const investment = [
    {
      date: "Dec 15, 2023",
      estate: "Urban Heights Residences",
     
      means: "Bank Transfer",
      // status: "Pending",
      view: "View Detail",
    },
    {
      date: "Dec 15, 2023",
      estate: "Urban Heights Residences",
     
      means: "Bank Transfer",
      // status: "Pending",
      view: "View Detail",
    },
    {
      date: "Dec 15, 2023",
      estate: "Urban Heights Residences",
     
      means: "Bank Transfer",
      // status: "Pending",
      view: "View Detail",
    },

    {
      date: "Dec 15, 2023",
      estate: "Urban Heights Residences",
     
      means: "Bank Transfer",
      // status: "Pending",
      view: "View Detail",
    },
  ];
  return (
    <>
    <div className={style.das}>
    <div className={style.dash}>
      <p className={style.list}>Investors List </p>

      <div className={style.dasl}>
        <button className={style.view}>View More</button>
      </div>
    </div>
    
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
          
              <th>Investment</th>
              {/* <th>Status</th> */}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {investment.map((investments, index) => (
              <tr key={index}>
                <td>{investments.date}</td>
                <td>{investments.estate}</td>
              
                <td>{investments.means}</td>
                {/* <td>{investments.status}</td> */}
                <td>{investments.view}</td>
                {/* <p className={style.buton}> View Detail</p> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}

export default PaymentList;

// import { useEffect, useState } from "react";
// import axios from "axios";

// function InvestmentList({ onSelect }) {
//   const [investments, setInvestments] = useState([]);
//   const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

//   useEffect(() => {
//     fetchInvestments();
//   }, []);

//   const fetchInvestments = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/admin/all-investmentscheme`);
//       setInvestments(response.data);
//     } catch (error) {
//       console.error("Error fetching investments:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this investment?")) {
//       try {
//         await axios.delete(`${API_BASE_URL}/admin/delete-investmentscheme/${id}`);
//         fetchInvestments(); // Refresh list after deletion
//       } catch (error) {
//         console.error("Error deleting investment:", error);
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Investment Schemes</h2>
//       {investments.length === 0 ? (
//         <p>No investments available.</p>
//       ) : (
//         investments.map((investment) => (
//           <div key={investment._id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
//             <h3>{investment.investmentType}</h3>
//             <p>
//               <strong>Amount:</strong> {investment.currency} {investment.investmentAmount}
//             </p>
//             <p><strong>Duration:</strong> {investment.duration} years</p>

//             {/* View Details */}
//             <button onClick={() => onSelect(investment)}>View Details</button>
            
//             {/* Delete Investment */}
//             <button onClick={() => handleDelete(investment._id)} style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}>
//               Delete
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default InvestmentList;

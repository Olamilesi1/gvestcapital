// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import style from "../styles/admindashboard.module.css";
// import TransactionForm from "./AdminTransactionForm";
// const Transactions = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [expandedRow, setExpandedRow] = useState(null);

//   useEffect(() => {
//     const fetchTransactions = async () => {
//       try {
//         const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
//         const response = await axios.get(`${API_BASE_URL}/user/transactions`);
//         setTransactions(response.data);
//       } catch (error) {
//         console.error("Error fetching transactions:", error);
//       }
//     };

//     fetchTransactions();
//   }, []);

//   return (
//     <div>
//       <div className={style.allInvest}>
//         <p>Transactions table</p>
//         <button className={style.newInvest}>Add New transaction</button>
//       </div> <br />

//       <table>
//         <thead>
//           <tr>
//             <th>Transaction ID</th>
//             <th>Username</th>
//             <th>Amount</th>
//             <th>Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map((transaction, index) => (
//             <React.Fragment key={transaction.transactionId}>
//               <tr
//                 onClick={() =>
//                   setExpandedRow(expandedRow === index ? null : index)
//                 }
//               >
//                 <td>{transaction.transactionId}</td>
//                 <td>{transaction.username}</td>
//                 <td>{transaction.amount}</td>
//                 <td>{new Date(transaction.createdAt).toLocaleDateString()}</td>
//                 <td>{transaction.status}</td>
//               </tr>
//               {expandedRow === index && (
//                 <tr>
//                   <td colSpan="4">
//                     {/* Render additional transaction details here */}
//                     <div>
//                       <p>
//                         <strong>Description:</strong> {transaction.description}
//                       </p>
//                       <p>
//                         <strong>Method:</strong> {transaction.method}
//                       </p>
//                       <p>
//                         <strong>Status:</strong> {transaction.status}
//                       </p>
//                       {/* Add more details as needed */}
//                     </div>
//                   </td>
//                 </tr>
//               )}
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>

//       <TransactionForm />
//     </div>
//   );

// };

// export default Transactions;


import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../styles/admindashboard.module.css";
import TransactionForm from "./AdminTransactionForm";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [showForm, setShowForm] = useState(false); // State to toggle transaction form

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        const response = await axios.get(`${API_BASE_URL}/user/transactions`);
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className={style.container}>
      {/* Blur Effect when form is open */}
      <div className={`${style.content} ${showForm ? style.blur : ""}`}>
        <div className={style.allInvest}>
          <p>Transactions Table</p>
          <button className={style.newInvest} onClick={() => setShowForm(true)}>
            Add New Transaction
          </button>
        </div>
        <br />

        <table>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Username</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <React.Fragment key={transaction.transactionId}>
                <tr
                  onClick={() =>
                    setExpandedRow(expandedRow === index ? null : index)
                  }
                >
                  <td>{transaction.transactionId}</td>
                  <td>{transaction.username}</td>
                  <td>{transaction.amount}</td>
                  <td>{new Date(transaction.createdAt).toLocaleDateString()}</td>
                  <td>{transaction.status}</td>
                </tr>
                {expandedRow === index && (
                  <tr>
                    <td colSpan="5">
                      {/* Render additional transaction details here */}
                      <div>
                        <p>
                          <strong>Description:</strong> {transaction.description}
                        </p>
                        <p>
                          <strong>Method:</strong> {transaction.method}
                        </p>
                        <p>
                          <strong>Status:</strong> {transaction.status}
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Show Transaction Form as a Modal */}
      {showForm && (
        <div className={style.modal}>
          <div className={style.modalContent}>
            <button className={style.closeBtn} onClick={() => setShowForm(false)}>
              ✖
            </button>
            <TransactionForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;


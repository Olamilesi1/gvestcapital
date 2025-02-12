// import Footer from "../../user/components/UserFooter";
// import style from "../styles/transactions.module.css"
// function Transaction() {
//   const investment = [
//     {
//         date: "Dec 15, 2023",
//         estate: "Urban Heights Residences",
//         cost: "$4,000",
//         means: "Bank Transfer",
//         status: "Pending",
//         view: "View"
//       },
//       {
//         date: "Dec 15, 2023",
//         estate: "Urban Heights Residences",
//         cost: "$4,000",
//         means: "Bank Transfer",
//         status: "Pending",
//         view: "View"
//       },
//       {
//         date: "Dec 15, 2023",
//         estate: "Urban Heights Residences",
//         cost: "$4,000",
//         means: "Bank Transfer",
//         status: "Pending",
//         view: "View"
//       },

//     {
//       date: "Dec 15, 2023",
//       estate: "Urban Heights Residences",
//       cost: "$4,000",
//       means: "Bank Transfer",
//       status: "Pending",
//       view: "View"
//     },
//     {
//       date: "Dec 15, 2023",
//       estate: "Urban Heights Residences",
//       cost: "$4,000",
//       means: "Bank Transfer",
//       status: "Pending",
//       view: "View"
//     },
//     {
//       date: "Dec 15, 2023",
//       estate: "Urban Heights Residences",
//       cost: "$4,000",
//       means: "Bank Transfer",
//       status: "Pending",
//       view: "View"
//     },
//     {
//       date: "Dec 15, 2023",
//       estate: "Urban Heights Residences",
//       cost: "$4,000",
//       means: "Bank Transfer",
//       status: "Pending",
//       view: "View"
//     },
//     {
//       date: "Dec 15, 2023",
//       estate: "Urban Heights Residences",
//       cost: "$4,000",
//       means: "Bank Transfer",
//       status: "Pending",
//       view: "View"
//     },
//     {
//       date: "Dec 15, 2023",
//       estate: "Urban Heights Residences",
//       cost: "$4,000",
//       means: "Bank Transfer",
//       status: "Pending",
//       view: "View"
//     },
//     {
//       date: "Dec 15, 2023",
//       estate: "Urban Heights Residences",
//       cost: "$4,000",
//       means: "Bank Transfer",
//       status: "Pending",
//       view: "View"
//     },

//   ];
//   return (
//     <>

//         <div className="table-container">
//           <table>
//             <thead className={style.head}>
//               <tr>
//                 <th className={style.headr}>Date</th>
//                 <th className={style.headr}>Investment Options</th>
//                 <th className={style.headr}>Amount</th>
//                 <th className={style.headr}>Payment Method</th>
//                 <th className={style.headr}>Status</th>
//                 <th className={style.headr}></th>
//               </tr>
//             </thead>
//             <tbody>
//               {investment.map((investments, index) => (
//                 <tr key={index}>
//                   <td>{investments.date}</td>
//                   <td>{investments.estate}</td>
//                   <td>{investments.cost}</td>
//                   <td>{investments.means}</td>
//                   <td>{investments.status}</td>
//                   <td>{investments.view}</td>
//                   {/* <p className={style.buton}> View Detail</p> */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <Footer/>
//         </div>

//     </>
//   );
// }

// export default Transaction;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/user/transactions"
        );
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  // Inside the TransactionsTable component

  return (
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
                <td colSpan="4">
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
                    {/* Add more details as needed */}
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );

  // Rest of the component...
};

export default Transactions;

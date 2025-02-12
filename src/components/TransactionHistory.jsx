import { useEffect, useState } from "react";
import axios from "axios";

const TransactionHistory = ({ userId }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [username, setUsername] = useState(
    localStorage.getItem("userUsername") || ""
  );

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/user/transactions/${username}`);
        setTransactions(response.data);
      } catch (err) {
        setError("Failed to load transactions.");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [userId]);

  if (loading) return <p>Loading transactions...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((txn) => (
          <li key={txn.transactionId}>
            <strong>Amount:</strong> {txn.amount / 100} {txn.currency.toUpperCase()} <br />
            <strong>Status:</strong> {txn.status} <br />
            <strong>Type:</strong> {txn.method} <br />
            <strong>Transaction ID:</strong> {txn.transactionId} <br />
            {/* <strong>Name:</strong> {txn.username} <br /> */}
            <strong>Date:</strong> {new Date(txn.createdAt).toLocaleString()} <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;

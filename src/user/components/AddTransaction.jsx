import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const AddTransaction = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("usd");
  //   const username = localStorage.getItem("userUsername");
  const [username, setUsername] = useState(
    localStorage.getItem("userUsername") || ""
  );
  //   const email = params.get("email");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [investmentName, setInvestmentName] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");
  // const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setMessage("Stripe is not loaded yet.");
      return;
    }

    if (!username) {
      setMessage("Username is required.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Create payment method
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (error) {
        setMessage(error.message);
        setLoading(false);
        return;
      }

      // Send payment details to backend
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
      const response = await axios.post(`${API_BASE_URL}/user/payment`, {
        email,
        amount: amount * 100, // Convert to cents
        currency,
        paymentMethodId: paymentMethod.id,
        username, // Include username in the request
        description,
        method,
      
        investmentName, 
        investmentDuration, 
        type
      });

      setMessage(
        `${response.data.message} Transaction ID: ${response.data.transactionId}`
      );
    } catch (err) {
      setMessage(err.response?.data?.message || "Payment failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Make a Payment</h2>
      <form onSubmit={handlePayment}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

         <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="usd">$</option>
          <option value="eur">EUR</option>
          {/* Add other currencies as needed */}
        </select>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
       
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /> 
        {/* <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /> */}
        <input
          type="text"
          placeholder="Investment Name"
          value={investmentName}
          onChange={(e) => setInvestmentName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Investment Duration"
          value={investmentDuration}
          onChange={(e) => setInvestmentDuration(e.target.value)}
        />
        <input
          type="text"
          placeholder="Transaction Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Transaction Method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />
        <CardElement />
        <button type="submit" disabled={loading || !stripe}>
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddTransaction;

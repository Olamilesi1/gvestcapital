import Pages from "./components/Pages";
import { HeaderProvider } from "./components/HeaderContext";
import { BrowserRouter as Router } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { NotificationProvider } from "./components/NotificationContext";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function App() {
  return (
    <div>
      <HeaderProvider>
      <NotificationProvider>
        <Router>
          {/* Wrap your application with the Elements provider */}
          <Elements stripe={stripePromise}>
            <Pages />
          </Elements>
        </Router>
        </NotificationProvider>
      </HeaderProvider>
    </div>
  );
}

export default App;


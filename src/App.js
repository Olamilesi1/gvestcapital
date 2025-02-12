// import Pages from "./components/Pages";
// import { HeaderProvider } from "./components/HeaderContext";
// import { UserProvider } from "./components/UserContext";
// import { BrowserRouter as Router } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       {/* <UserProvider> */}
//         <HeaderProvider>
//         <Router>
//           <Pages />
//         </Router>
//       </HeaderProvider>
//       {/* </UserProvider> */}
//     </div>
//   );
// }

// export default App;

import Pages from "./components/Pages";
import { HeaderProvider } from "./components/HeaderContext";
import { BrowserRouter as Router } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe("pk_test_51QrH2SIwiyI9pkRtSY7L81Yb8ZFXXZpeLN6nAOMJID5Y8DnZZvctGZmEDR3URlPMqlTYsga4eDGUnokSOqJHAPzi00rgQZAsef");

function App() {
  return (
    <div>
      <HeaderProvider>
        <Router>
          {/* Wrap your application with the Elements provider */}
          <Elements stripe={stripePromise}>
            <Pages />
          </Elements>
        </Router>
      </HeaderProvider>
    </div>
  );
}

export default App;

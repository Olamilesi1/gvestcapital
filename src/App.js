import Pages from "./components/Pages";
import { UserProvider } from "./components/UserContext";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <UserProvider>
        <Router>
          <Pages />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;

import Pages from "./components/Pages";
import { HeaderProvider } from "./components/HeaderContext";
import { UserProvider } from "./components/UserContext";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <UserProvider> */}
        <HeaderProvider>
        <Router>
          <Pages />
        </Router>
      </HeaderProvider>
      {/* </UserProvider> */}
    </div>
  );
}

export default App;

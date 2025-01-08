import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import GvestInsight from "../pages/GvestInsight";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Login from "../pages/Login";
import IRA from "../pages/IRA";
import Investment from "../pages/Investment";
import InvestmentDetail from "../pages/InvestmentDetail";
import Schedule from "../pages/Schedule";
import Testimonial from "../pages/Testimonial";
import EmailSuccess from "../pages/EmailSuccess";
import ForgotPassword from "../pages/ForgotPassword";
import UpdatePassword from "../pages/UpdatePassword";
import EmailVerify from "../pages/EmailVerify";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsCondition from "../pages/TermsCondition";
import Disclosure from "../pages/Disclosure";

// User Import
import UserProperties from "../user/pages/UserProperties";
import UserDashboard from "../user/pages/UserDashboard";
import UserTransactions from "../user/pages/UserTransactions";

function Pages() {
  return (
    <div>
      <Routes>
        {/* Main website routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gc-insight" element={<GvestInsight />} />
        <Route path="/investment/:id" element={<InvestmentDetail />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/ira-info" element={<IRA />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/book-an-appointment" element={<Schedule />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/t&c" element={<TermsCondition />} />
        <Route path="/email-success" element={<EmailSuccess />} />
        <Route path="/disclosure" element={<Disclosure />} />
        <Route path="/disclosure" element={<Disclosure />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-password" element={<UpdatePassword />} />
        <Route path="*" element={<NotFound />} />

        {/* User Pages*/}
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/properties" element={<UserProperties />} />
        <Route path="/user/transactions" element={<UserTransactions />} />
      </Routes>
    </div>
  );
}

export default Pages;

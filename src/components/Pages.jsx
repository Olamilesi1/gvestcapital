import { Routes, Route } from "react-router-dom";
import { UserProvider } from "../components/UserContext";
import { AdminProvider } from "../components/AdminContext";

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
import VerifyEmail from "../pages/VerifyEmail";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsCondition from "../pages/TermsCondition";
import Disclosure from "../pages/Disclosure";
import PropertyDetail from "../components/reusables/PropertyDetail";
import PaymentForm from "../user/components/AddTransaction";

//Third party
import Calendy from "./Calendly"

// User Import
import UserProperties from "../user/pages/UserProperties";
import UserPropertySchemeInfo from "../user/components/UserPropertySchemeInfo";
import UserDashboard from "../user/pages/UserDashboard";
import UserTransactions from "../user/pages/UserTransactions";
import UserInvestment from "../user/pages/UserInvestment";
import UserInvestments from "../user/pages/UserInvestments";
import CompoundInterest from "../user/pages/CompoundInterest";
import SimpleInterest from "../user/pages/SimpleInterest";
import Documents from "../user/pages/UserDocuments";
import UserNotification from "../user/pages/UserNotification";
import UserSetting from "../user/pages/UserSettings";
import UserPassword from "../user/pages/UserPassword";
import UserTerm from "../user/pages/UserTerms";
import UserWallet from "../user/pages/UserWallet";
import UserCompany from "../user/pages/UserCompany";

// Admin Import
import AdminLogin from "../admin/pages/AdminLogin";
import AdminRegister from "../admin/pages/AdminRegister";
import AdminPassword from "../admin/pages/AdminPassword";
import AdminDashboard from "../admin/pages/AdminDashboard";
import AdminSetting from "../admin/pages/AdminSetting";
import AdminUser from "../admin/pages/AdminUsers";
import AdminInvestPlans from "../admin/pages/AdminInvestPlans";
import AdminAllInvest from "../admin/pages/AdminAllInvest";
import AdminTransaction from "../admin/pages/AdminTransaction";
import AdminDocument from "../admin/pages/AdminDocument";
import AdminWallet from "../admin/pages/AdminWallet";
import AdminTerm from "../admin/pages/AdminTerm";
import AdminNotification from "../admin/pages/AdminNotification";
// import AdminAllUserNotificationForm  from "../admin/components/AdminAllUserNotificationForm";
import AdminVerifyEmail from "../admin/components/AdminVerifyEmail";
import AdminEmailVerify from "../admin/components/AdminEmailVerify";
import AdminForgotPassword from "../admin/components/AdminForgotPassword";
import AdminEmailSuccess from "../admin/components/AdminEmailSuccess";
import AdminUpdatePassword from "../admin/components/AdminUpdatePassword";
import AddPropertyInvestment from "../admin/components/AllUsersPropertySchemeForm";
import AddInvestmentSchemeForm from "../admin/components/AllUsersInvestmentSchemeForm";
import AdminPropertySchemeInfo from "../admin/components/AdminPropertySchemeInfo";
import AdminInvestSchemeInfo from "../admin/components/AdminInvestSchemeInfo";

function Pages() {
  return (
    <div>
      <UserProvider>
        <AdminProvider>
          <Routes>

            {/* Third Party Route */}
            <Route path="/schedule-consultation" element={<Calendy/>}/>

            {/* Main website routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gc-insight" element={<GvestInsight />} />
            <Route path="/investment/:id" element={<InvestmentDetail />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/ira-info" element={<IRA />} />
            <Route path="/book-an-appointment" element={<Schedule />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/email-verify" element={<EmailVerify />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/t&c" element={<TermsCondition />} />
            <Route path="/email-success" element={<EmailSuccess />} />
            <Route path="/disclosure" element={<Disclosure />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<UpdatePassword />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/property-detail/:propertyType" element={<PropertyDetail />} />
           
            {/* User Pages*/}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user/dashboard" element={<UserDashboard />} />
           
            <Route path="/user/property/:id" element={<UserPropertySchemeInfo />} />
            <Route path="/user/properties" element={<UserProperties />} />
            <Route path="/user/transactions" element={<UserTransactions />} />
            <Route path="/user/investment" element={<UserInvestment />} />
            <Route path="/user/investments" element={<UserInvestments />} />
            <Route path="/user/compound-interest" element={<CompoundInterest />}/>
            <Route path="/user/simple-interest" element={<SimpleInterest />} />
            <Route path="/user/mine" element={<Documents />} />
            <Route path="/user/company" element={<UserCompany />} />
            <Route path="/user/notification" element={<UserNotification />} />
            <Route path="/user/wallet" element={<UserWallet />} />
            <Route path="/user/setting" element={<UserSetting />} />
            <Route path="/user/password" element={<UserPassword />} />
            <Route path="/user/term" element={<UserTerm />} />

            {/* Admin Pages */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/register" element={<AdminRegister />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUser />} />
            <Route path="/admin/invest-plans" element={<AdminInvestPlans />} />
            <Route path="/admin/all-investments" element={<AdminAllInvest />} />
            <Route path="/admin/transactions" element={<AdminTransaction />} />
            <Route path="/admin/mine" element={<AdminDocument />} />
            <Route path="/admin/wallet" element={<AdminWallet />} />
            <Route path="/admin/term" element={<AdminTerm />} />
            <Route path="/admin/notification" element={<AdminNotification />} />
            {/* <Route path="/admin/all/notification" element={<AdminAllUserNotificationForm />} /> */}
            <Route path="/admin/setting" element={<AdminSetting />} />
            <Route path="/admin/password" element={<AdminPassword />} />
            <Route path="/admin/email-success" element={<AdminEmailSuccess />}/>
            <Route path="/admin/forgot-password" element={<AdminForgotPassword />}/>
            <Route path="/admin/email-verify" element={<AdminEmailVerify />} />
            <Route path="/admin/verify-email" element={<AdminVerifyEmail />} />
            <Route path="/admin/reset-password" element={<AdminUpdatePassword />} />
            <Route path="/admin/add-propertyinvest" element={<AddPropertyInvestment />}/>
            <Route path="/admin/property/:id" element={<AdminPropertySchemeInfo />} />
            <Route path="/admin/add-investscheme" element={<AddInvestmentSchemeForm />}/>
            <Route path="/admin/investmentscheme/:id" element={<AdminInvestSchemeInfo />}/>
            <Route path="/user/stripe" element={<PaymentForm />} />
          </Routes>
        </AdminProvider>
      </UserProvider>
    </div>
  );
}

export default Pages;

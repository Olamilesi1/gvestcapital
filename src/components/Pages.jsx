import { Routes, Route } from "react-router-dom";
import Overview from "../pages/Overview";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import GvestInsight from "../pages/GvestInsight";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Login from "../pages/Login";
import IRA from "../pages/IRA";
import Investment from "../pages/Investment";
import Schedule from "../pages/Schedule";
import Testimonial from "../pages/Testimonial";
import FAQ from "../pages/FAQ";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsCondition from "../pages/TermsCondition";
import Disclosure from "../pages/Disclosure";


function Pages() {
  return (
    <div>
      <Routes>
        {/* Main website routes */}
        <Route path="/" element={<Home/>} />
        <Route path="/overview" element={<Overview/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/gc-insight" element={<GvestInsight/>} />
        <Route path="/investment" element={<Investment/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/ira-info" element={<IRA/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<Register/>} />
        <Route path="/book-an-appointment" element={<Schedule/>} />
        <Route path="/testimonial" element={<Testimonial/>}/>
        <Route path="/faq" element={<FAQ />}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/t&c" element={<TermsCondition/>}/>
        <Route path="/disclosure" element={<Disclosure/>} />
        <Route path="*" element={<NotFound/>} />

        {/* Admin Pages*/}
      </Routes>
    </div>
  );
}

export default Pages;

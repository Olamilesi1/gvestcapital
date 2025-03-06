// import React from "react";
// import { InlineWidget } from "react-calendly";

// const Calendy = () => {
//   return (
//     <div className="App">
//       <InlineWidget url="https://calendly.com/olamilesiadeola111" />
//     </div>
//   );
// };

// export default Calendy;

import React from "react";
import style from "../styles/Home.module.css";
import Footer from "../components/reusables/Footer";
import Header from "../components/reusables/Header";

const BookAppointment = () => {
  const bookingLink = "https://calendar.app.google/SiPKLWyTqn6rXSWS8";

  return (
    <>
      <Header />
      <div className={style.home}>
        <div className={style.homeText}>
          <h1 className={style.contactText}>Book An Appointment With Us</h1>
          <a href={bookingLink} className={style.consult} target="_blank" rel="noopener noreferrer">
            <button  className={style.link}>
              {/* <NavLink to="/register">Ready To Invest</NavLink> */}
              Book Now
              {/* <span class="material-symbols-outlined">arrow_forward</span> */}
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookAppointment;

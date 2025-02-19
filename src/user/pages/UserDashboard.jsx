// import SideBar from "../components/UserSideBar";
// import PaymentList from "../components/PaymentList";
// import Upcoming from "../components/Upcoming";
// import TotalInvestment from "../components/TotalInvestment";
// import TotalInvestedAmount from "../components/TotalInvestedAmount";
// import TotalMonthlyInterest  from "../components/TotalMonthlyInterest";
// import UserHeader from "../components/UserHeader";
// import style from "../styles/userdashboard.module.css";

// function UserDashboard() {
  
//   return (
//     <>
//       <div className={style.componentContent}>
//         <SideBar />

//         <div className={style.headerContent}>
//           <UserHeader />

//           <div className={style.outline}>
//             <div className={style.investTotal}>
//               <TotalInvestedAmount />
//               <TotalInvestment />
//               <TotalMonthlyInterest />
        
//             </div>

//             <div className={style.overcome}>
//               <Upcoming />
//             </div>

//             <PaymentList />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default UserDashboard;

import { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../components/UserSideBar";
import PaymentList from "../components/PaymentList";
import Upcoming from "../components/Upcoming";
import TotalInvestment from "../components/TotalInvestment";
import TotalInvestedAmount from "../components/TotalInvestedAmount";
import TotalMonthlyInterest from "../components/TotalMonthlyInterest";
import UserHeader from "../components/UserHeader";
import style from "../styles/userdashboard.module.css";

function UserDashboard() {
  const [investments, setInvestments] = useState({
    propertyInvestments: [],
    investmentSchemes: [],
  });

  

  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        const token = localStorage.getItem("userAuthToken");
        const username = localStorage.getItem("userUsername");

        if (!username) {
          throw new Error("User name not found in localStorage");
        }

        const response = await axios.get(
          `${API_BASE_URL}/user/user-investments/${username}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log("Fetched Investments:", response.data);
        setInvestments(response.data);
      } catch (error) {
        console.error("Error fetching investments", error);
      }
    };

    fetchInvestments();
  }, []);

  // ✅ Calculate totals
  const totalInvestmentAmount =
    investments.propertyInvestments.reduce(
      (sum, inv) => sum + (inv.amountPaid ?? 0),
      0
    ) +
    investments.investmentSchemes.reduce(
      (sum, inv) => sum + (inv.amountPaid ?? 0),
      0
    );

  const totalMonthlyInterest = investments.investmentSchemes.reduce(
    (sum, inv) => sum + (inv.roi ?? 0),
    0
  );

  const totalInvestments =
    investments.propertyInvestments.length +
    investments.investmentSchemes.length;

  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
            <div className={style.investTotal}>
              {/* Pass calculated totals as props */}
              <TotalInvestment totalInvestments={totalInvestments} />
              <TotalInvestedAmount totalInvestmentAmount={totalInvestmentAmount} />
              <TotalMonthlyInterest totalMonthlyInterest={totalMonthlyInterest} />
            </div>

            <div className={style.overcome}>
              <Upcoming />
            </div>

            <PaymentList />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;

import style from "../styles/paymentlist.module.css";
function PaymentList() {
  const investment = [
    {
      date: "Dec 15, 2023",
      estate: "Urban Heights Residences",
     
      means: "Bank Transfer",
      // status: "Pending",
      view: "View Detail",
    },
    {
      date: "Dec 15, 2023",
      estate: "Urban Heights Residences",
     
      means: "Bank Transfer",
      // status: "Pending",
      view: "View Detail",
    },
    {
      date: "Dec 15, 2023",
      estate: "Urban Heights Residences",
     
      means: "Bank Transfer",
      // status: "Pending",
      view: "View Detail",
    },

    {
      date: "Dec 15, 2023",
      estate: "Urban Heights Residences",
     
      means: "Bank Transfer",
      // status: "Pending",
      view: "View Detail",
    },
  ];
  return (
    <>
    <div className={style.das}>
    <div className={style.dash}>
      <p className={style.list}>Investors List </p>

      <div className={style.dasl}>
        <button className={style.view}>View More</button>
      </div>
    </div>
    
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
          
              <th>Investment</th>
              {/* <th>Status</th> */}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {investment.map((investments, index) => (
              <tr key={index}>
                <td>{investments.date}</td>
                <td>{investments.estate}</td>
              
                <td>{investments.means}</td>
                {/* <td>{investments.status}</td> */}
                <td>{investments.view}</td>
                {/* <p className={style.buton}> View Detail</p> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}

export default PaymentList;

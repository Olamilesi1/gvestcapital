import style from "../styles/paymentlist.module.css"
function PaymentList() {
  const investment = [
    {
        date: "Dec 15, 2023",
        estate: "Urban Heights Residences",
        cost: "$4,000",
        means: "Bank Transfer",
        status: "Pending",
        view: "View"
      },
      {
        date: "Dec 15, 2023",
        estate: "Urban Heights Residences",
        cost: "$4,000",
        means: "Bank Transfer",
        status: "Pending",
        view: "View"
      },
      {
        date: "Dec 15, 2023",
        estate: "Urban Heights Residences",
        cost: "$4,000",
        means: "Bank Transfer",
        status: "Pending",
        view: "View"
      },

    {
      date: "Dec 15, 2023",
      estate: "Urban Heights Residences",
      cost: "$4,000",
      means: "Bank Transfer",
      status: "Pending",
      view: "View"
    },

  ];
  return (
    <>
    
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th className={style.list}>Recent Payment List</th>
                <th></th>
                <th></th>
                <th></th>
                <th className={style.pay}>5 new payment</th>
                <th className={style.view}>View More</th>
              </tr>
            </thead>
            <tbody>
              {investment.map((investments, index) => (
                <tr key={index}>
                  <td>{investments.date}</td>
                  <td>{investments.estate}</td>
                  <td>{investments.cost}</td>
                  <td>{investments.means}</td>
                  <td>{investments.status}</td>
                  <td>{investments.view}</td>
                  {/* <p className={style.buton}> View Detail</p> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
   
    </>
  );
}

export default PaymentList;

  
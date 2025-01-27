import Footer from "../../user/components/UserFooter";
import style from "../styles/admininvestment.module.css"
function AdminInvestment() {
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
            <thead className={style.head}>
              <tr>
                <th className={style.headr}>Plan ID</th>
                <th className={style.headr}>Tenure Rate</th>
                <th className={style.headr}>Percentage </th>
                <th className={style.headr}>Status</th>
                <th className={style.headr}>Currency</th>
                <th className={style.headr}>Unit Left</th>
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

          <Footer/>
        </div>
   
    </>
  );
}

export default AdminInvestment;

  
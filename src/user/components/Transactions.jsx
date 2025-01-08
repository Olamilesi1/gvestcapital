import style from "../styles/transactions.module.css"
function Transactions() {
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
                <th className={style.headr}>Date</th>
                <th className={style.headr}>Investment Options</th>
                <th className={style.headr}>Amount</th>
                <th className={style.headr}>Payment Method</th>
                <th className={style.headr}>Status</th>
                <th className={style.headr}></th>
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

          <div className={style.footer}>
            <div className={style.foot1}>
                <p>Showing</p>
                <select name="" id="">
                    <option value="">30</option>
                </select>
            </div>

            <p>Showing 1 of 10 of 50 records</p>

            <div className={style.foot2}>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>

            </div>
          </div>
        </div>
   
    </>
  );
}

export default Transactions;

  
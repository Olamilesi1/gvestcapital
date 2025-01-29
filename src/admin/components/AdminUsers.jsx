import style from "../styles/paymentlist.module.css";
function AdminUsers() {
  const investment = [
    {
      date: "Gbade Adeola",
      estate: "tona_ga@yahoo.cm",
      means: "$4,500",
      num: "5",
      view: "View Detail",
    },
    {
      date: "Gbade Adeola",
      estate: "tona_ga@yahoo.cm",
      means: "$4,500",
      num: "5",
      view: "View Detail",
    },
    {
      date: "Gbade Adeola",
      estate: "tona_ga@yahoo.cm",
      means: "$4,500",
      num: "5",
      view: "View Detail",
    },

    {
      date: "Gbade Adeola",
      estate: "tona_ga@yahoo.cm",
      means: "$4,500",
      num: "5",
      view: "View Detail",
    },
  ];
  return (
    <>
      <div className={style.das}>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Recent Payment</th>
                <th>No of Investment</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {investment.map((investments, index) => (
                <tr key={index}>
                  <td>{investments.date}</td>
                  <td>{investments.estate}</td>
                  <td>{investments.means}</td>
                  <td>{investments.num}</td>
                  <td>{investments.view}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminUsers;

import style from "../styles/total.module.css";

function Total({
  totalInvestmentAmount = 0,
  totalMonthlyInterest = 0,
  totalInvestments = 0,
}) {
  return (
    <div className={style.monthInterest}>
      <div className={style.monthTotal}>
        {/* <p>Total Investment Amount: ${totalInvestmentAmount.toLocaleString()}</p> */}
        {/* <p>Total Monthly Interest: ${totalMonthlyInterest.toLocaleString()}</p> */}
        <p>Total Investments: {totalInvestments.toLocaleString()}</p>
        <p>📈</p> {/* Placeholder for icon */}
      </div>

      {/* <p>50%</p> */}
      {/* 
      <div className={style.compare}>
        <p className={style.green}>+4%</p>
        <p>Compare to last month</p>
      </div> */}
    </div>
  );
}

export default Total;

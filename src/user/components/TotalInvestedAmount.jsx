import style from "../styles/total.module.css";

function Total({ totalInvestmentAmount = 0 }) {
  return (
    <div className={style.monthInterest}>
      <div className={style.monthTotal}>
        <p>
          Total Investment Amount: ${totalInvestmentAmount.toLocaleString()}
        </p>
        <p>📈</p> 
      </div>
    </div>
  );
}

export default Total;

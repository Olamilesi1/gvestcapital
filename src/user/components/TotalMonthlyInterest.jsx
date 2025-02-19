import style from "../styles/total.module.css";

function Total({ totalMonthlyInterest = 0 }) {
  return (
    <div className={style.monthInterest}>
      <div className={style.monthTotal}>
        <p>Total Interest: ${totalMonthlyInterest.toLocaleString()}</p>
        <p>📈</p> {/* Placeholder for icon */}
      </div>
    </div>
  );
}

export default Total;

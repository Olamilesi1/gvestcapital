import style from "../styles/total.module.css";

function TotalMonthInterest() {
    return (
        <>
          <div className={style.monthInterest}>
          <div className={style.monthTotal}>
            <p>Total Monthly Interest</p>
            <p>Icon</p>
            </div> 

            <p>50%</p> 

            <div className={style.compare}>
                <p className={style.green}>+4%</p>
                <p>compare to last month</p>
            </div>
            </div>  
        </>
    )
}

export default TotalMonthInterest

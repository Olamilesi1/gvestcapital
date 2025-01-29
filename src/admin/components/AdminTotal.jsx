import style from "../styles/total.module.css";

function AdminTotal() {
  return (
    <>
      <div className={style.monthTotal}>
        <p className={style.touse}>Total Users</p>
        <p className={style.big}>20</p>
      </div>
    </>
  );
}

export default AdminTotal;

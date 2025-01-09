import style from "../styles/wallet.module.css"

function Wallet() {
  return (
    <>
    <div className={style.wallets}>
      <div className={style.logoWallet}>
        <img src="/images/gVestLogo.png" alt="logo" className={style.img} />
        <p className={style.naira}>Naira Wallet</p>
      </div>

      <img src="/images/chip.png" alt="chip"  className={style.pho}/>
      <p className={style.number}>5355 0348 5945 5045</p>

      <p className={style.amount}># 5000000</p>
    </div>
    </>
  );
}

export default Wallet;

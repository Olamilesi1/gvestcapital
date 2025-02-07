import style from "../styles/addinvest.module.css";

function InvestmentDetailsModal({ investment, onClose }) {
  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
        <h2>Investment Details</h2>
        <p><strong>Investment ID:</strong> {investment.investmentId}</p>
        <p><strong>Type:</strong> {investment.type}</p>
        <p><strong>Username:</strong> {investment.username}</p>
        <p><strong>User Email:</strong> {investment.userEmail}</p>
        <p><strong>Amount Paid:</strong> {investment.amountPaid}</p>
        <p><strong>Date Invested:</strong> {investment.dateInvested}</p>
        {investment.nextRoiDate && <p><strong>Next ROI Date:</strong> {investment.nextRoiDate}</p>}
        <p><strong>Payment Method:</strong> {investment.paymentMethod}</p>
        <p><strong>Status:</strong> {investment.status}</p>
        <p><strong>Description:</strong> {investment.description || "N/A"}</p>

        <button className={style.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default InvestmentDetailsModal;

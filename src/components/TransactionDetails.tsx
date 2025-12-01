import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils/dateUtils";
import "./TransactionDetails.scss";
import { formatCurrency } from "../utils/currencyUtils";
import { formatPaymentType } from "../utils/paymentUtils";

const TransactionDetails = ({currentTransaction}) => {
  const navigate = useNavigate();
  
  const navigateToTransactions = () => {
    navigate("/")
  }

  return (
    <>
      <div className="backButton">
        <button onClick={navigateToTransactions} type="button" name="back">{'< back'}</button>
      </div>
      
      <div>
        <h3>Transaction details</h3>
        <table>
          <tbody>
          <tr>
            <th>Merchant</th>
            <td>{currentTransaction?.merchantName}</td>
          </tr>
          <tr>
            <th>Amount</th>
            <td>{formatCurrency(currentTransaction?.totalAmount)}</td>
          </tr>
          <tr>
            <th>Date</th>
            <td>{currentTransaction?.purchaseDate && formatDate(currentTransaction?.purchaseDate)}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td className="bold">{currentTransaction?.status}</td>
          </tr>
          <tr>
            <th>Paid by</th>
            <td>{formatPaymentType(currentTransaction?.paymentMethod?.type)} ****{currentTransaction?.paymentMethod?.last4}</td>
          </tr>
          <tr>
            <th>Payment type</th>
            <td>{currentTransaction?.paymentType}</td>
          </tr>
          </tbody>
        </table>

        {
          currentTransaction.installmentPlan &&
          <>
          <h4>Installments</h4>
            <table className="installments">
              <tbody>
              <tr>
                <th>Amount</th>
                <td>{formatCurrency(currentTransaction.installmentPlan.installmentAmount)}</td>
              </tr>
              <tr>
                <th>Frequency</th>
                <td>{currentTransaction?.installmentPlan?.frequency}</td>
              </tr>
              {
                currentTransaction.installmentPlan.totalInstallments !== currentTransaction.installmentPlan.paidInstallments &&
                  <tr>
                    <th>Next payment</th>
                    <td className="bold">{formatDate(currentTransaction.installmentPlan.nextPaymentDate)}</td>
                  </tr>
              }
              <tr>
                <th>Installments</th>
                <td>{currentTransaction.installmentPlan.totalInstallments}</td>
              </tr>
              <tr>
                <th>Already paid</th>
                <td>{currentTransaction.installmentPlan.paidInstallments}</td>
              </tr>
              </tbody>
            </table>
          </>
        }  
      </div>
    </>
  )
}

export default TransactionDetails

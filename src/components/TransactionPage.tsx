import { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../ctx/TransactionContext";
import { useParams } from "react-router-dom";
import { formatDate } from "../utils/dateUtils";
import "./TransactionPage.scss";
import { formatCurrency } from "../utils/currencyUtils";
import { formatPaymentType } from "../utils/paymentUtils";

const TransactionPage = () => {
  const { transactions } = useContext(TransactionContext);
  const { id } = useParams();
  const [currentTransaction, setCurrentTransaction] = useState()

  useEffect(() => {
    setCurrentTransaction(transactions.find(transaction => transaction.id === id));
  }, [])

  if (!currentTransaction) {
    return (<p>Something went wrong, transaction not found</p>)
  }
  
  return (
    <div>
      <h3>Transaction details</h3>
      <table>
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
          <td>{formatDate(currentTransaction?.purchaseDate || "")}</td>
        </tr>
        <tr>
          <th>Status</th>
          <td className="bold">{currentTransaction?.status}</td>
        </tr>
        <tr>
          <th>Paid by</th>
          <td>{formatPaymentType(currentTransaction?.paymentMethod.type)} ****{currentTransaction?.paymentMethod.last4}</td>
        </tr>
        <tr>
          <th>Payment type</th>
          <td>{currentTransaction?.paymentType}</td>
        </tr>
      </table>

<br/>
      <h4>Installments</h4>
      <table className="installments">
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
      </table>
    </div>
  )
}

export default TransactionPage

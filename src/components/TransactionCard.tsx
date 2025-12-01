import { formatDate } from "../utils/dateUtils"
import BankIcon from '../assets/svg/bank.svg?react';
import CreditCardIcon from '../assets/svg/credit_card.svg?react';
import DebitCardIcon from '../assets/svg/debit_card.svg?react';
import "./TransactionCard.scss";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../utils/currencyUtils";

const TransactionCard = ({transaction}) => {
  const navigate = useNavigate();
  
  const navigateToTransaction = () => {
    navigate(`/transaction/${transaction.id}`)
  }

  return (
    <div 
      className={`transactionContainer transaction-${transaction.status}`} 
      key={transaction.id}
    >
      <a onClick={navigateToTransaction}>
        <div className="transactionDetails">
          <div>
            <p className="transactionAmount">{formatCurrency(transaction.totalAmount)}</p> 
          </div>
          <div>
            <p className="transactionMerchant">{transaction.merchantName}</p>
          </div>
        </div>
        <div className="transactionDetails transactionSecondaryDetails">
          <div>
            <p className="transactionDate">{formatDate(transaction.purchaseDate)}</p>
          </div>
          <div>
            <p className="transactionPaymentType">
              {
                transaction.paymentMethod.type === "credit_card" && 
                <CreditCardIcon/>
              }
              {
                transaction.paymentMethod.type === "debit_card" && 
                <DebitCardIcon/>
              }
              {
                transaction.paymentMethod.type === "bank_account" && 
                <BankIcon/>
              }
            </p>
          </div>
          <div>
            <p>{transaction.status}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default TransactionCard

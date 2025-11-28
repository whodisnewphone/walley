import type { Transaction } from "../types/transaction"
import { formatDate } from "../utils/dateUtils"
import BankIcon from '../assets/svg/bank.svg?react';
import CreditCardIcon from '../assets/svg/credit_card.svg?react';
import DebitCardIcon from '../assets/svg/debit_card.svg?react';
import "./TransactionCard.scss";

const TransactionCard = ({transaction}) => {
console.log(transaction, 'bubu')
  return (
    <div className={`transactionContainer transaction-${transaction.status}`} key={transaction.id}>
      <div className="transactionDetails">
        <div>
          <p className="transactionAmount">{transaction.totalAmount} SEK</p> 
          {/* todo add dynamic currency */}
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
    </div>
  )
}

export default TransactionCard

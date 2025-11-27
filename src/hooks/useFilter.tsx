import { useContext } from "react"
import { TransactionContext } from "../ctx/TransactionContext"
import type { PaymentType, TransactionStatus } from "../types/transaction"
import { isDateInRange, isXDaysInThePast } from "../utils/dateUtils"

const useFilter = () => {
  const {transactions, setDisplayedTransactions} = useContext(TransactionContext)

  const filterByTransactionStatus = (status ?: TransactionStatus) => {
    if (status) {
      setDisplayedTransactions(transactions.filter((transaction) => transaction.status === status));
      return
    }
   
    setDisplayedTransactions(transactions)
  }

  const filterByPaymentType = (paymentType ?: PaymentType) => {
    if (paymentType) {
      setDisplayedTransactions(transactions.filter((transaction) => transaction.paymentType === paymentType));
      return
    }
   
    setDisplayedTransactions(transactions)
  }

  const filterByDate = (days ?: string) => {
    if (days) {
      setDisplayedTransactions(transactions.filter((transaction) => isXDaysInThePast(transaction.purchaseDate, days)));
      return
    }
   
    setDisplayedTransactions(transactions)
  }

  const filterByCustomDate = (customDate : string) => {
    setDisplayedTransactions(transactions.filter((transaction) =>
      !isDateInRange(transaction.purchaseDate, customDate, new Date().toISOString())
    
    ))
  }

  return { filterByTransactionStatus, filterByPaymentType, filterByDate, filterByCustomDate }
}

export default useFilter;

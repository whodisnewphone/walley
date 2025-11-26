import { useContext } from "react"
import { TransactionContext } from "../ctx/TransactionContext"
import type { TransactionStatus } from "../types/transaction"

const useFilter = () => {
  const {transactions, setDisplayedTransactions} = useContext(TransactionContext)

  const filterByTransactionStatus = (status ?: TransactionStatus) => {
    if (status) {
      setDisplayedTransactions(transactions.filter((transaction) => transaction.status === status));
    }
   
    return transactions
  }
  return {filterByTransactionStatus}
}

export default useFilter;

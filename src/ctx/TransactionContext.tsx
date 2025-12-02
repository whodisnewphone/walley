import { createContext, useState, type FC, type ReactNode } from "react";
import type { PaymentType, Transaction, TransactionStatus } from "../types/transaction";
import transactionData from '../data/transactions.json'

export type iTransactionContext = {
  transactions: Transaction[]
  setTransactions: (transactions: Transaction[]) => void
  displayedTransactions: Transaction[]
  setDisplayedTransactions: (transactions: Transaction[]) => void
  setStatusFilter: (status: TransactionStatus|null) => void
  paymentTypeFilter: PaymentType|null
  setPaymentTypeFilter: (paymentType: PaymentType|null) => void
  dateFilter: string|null
  setDateFilter: (date: string|null) => void
}

const defaultTransactions = {
  transactions: [],
  setTransactions: () => {},
  displayedTransactions: [],
  setDisplayedTransactions: () => {},
  statusFilter: null,
  setStatusFilter: () => {},
  paymentTypeFilter: null,
  setPaymentTypeFilter: () => {},
  dateFilter: null,
  setDateFilter: () => {}
}

export const TransactionContext = createContext<iTransactionContext>(defaultTransactions)

const TransactionContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Array<Transaction>>(transactionData.transactions)
  const [displayedTransactions, setDisplayedTransactions] = useState<Array<Transaction>>(transactionData.transactions)
  const [statusFilter, setStatusFilter] = useState<TransactionStatus|null>(null)
  const [paymentTypeFilter, setPaymentTypeFilter] = useState<PaymentType>(null)
  const [dateFilter, setDateFilter] = useState<string>("")

  return (
    <TransactionContext.Provider value={{
      transactions,
      setTransactions,
      displayedTransactions,
      setDisplayedTransactions,
      statusFilter,
      setStatusFilter,
      paymentTypeFilter,
      setPaymentTypeFilter,
      dateFilter,
      setDateFilter
    }}>
      { children }
    </TransactionContext.Provider>
  )
}

export default TransactionContextProvider

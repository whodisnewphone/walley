import { createContext, useState, type Dispatch, type FC, type ReactNode, type SetStateAction } from "react";
import type { Transaction, TransactionsData } from "../types/transaction";
import transactionData from '../data/transactions.json'

type iTransactionContext = {
  transactions: Transaction[]
  setTransactions: () => Dispatch<SetStateAction<TransactionsData>>
}

const defaultTransactions = {
  transactions: [],
  setTransactions: () => {}
}

export const TransactionContext = createContext<iTransactionContext>(defaultTransactions)

const TransactionContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [transactions, setTransactions] = useState<Array<Transaction>>(transactionData.transactions)

  return (
    <TransactionContext value={{
      transactions,
      setTransactions,
    }}>
      { children }
    </TransactionContext>
  )
}

export default TransactionContextProvider

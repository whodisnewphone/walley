import { useContext, useEffect, useState } from "react";
import TransactionDetails from "../components/TransactionDetails";
import { useParams } from "react-router-dom";
import { TransactionContext } from "../ctx/TransactionContext";

const TransactionPage = () => {
  const { transactions } = useContext(TransactionContext);
  const { id } = useParams();
  const [ currentTransaction, setCurrentTransaction ] = useState()

  useEffect(() => {
    setCurrentTransaction(transactions.find(transaction => transaction.id === id));
  }, [])

  if (!currentTransaction) {
    return (<p>Something went wrong, transaction not found</p>)
  }

  return (
    <>
      <TransactionDetails currentTransaction={currentTransaction}/>
    </>
  )
}

export default TransactionPage;

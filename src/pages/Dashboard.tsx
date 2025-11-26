import { useContext } from "react"
import { TransactionContext } from "../ctx/TransactionContext"

const Dashboard = () => {
  const {transactions} = useContext(TransactionContext)
console.log(transactions,'ttt')
  return (
    <>
    <div>My Payments Dashboard</div>
    {
      transactions.map(transaction => {
        return(
        <div>
          <h6>{transaction.totalAmount}</h6>
          <p>{transaction.merchantName}</p>
          <p>{transaction.purchaseDate}</p>
        </div>
        )
      })
    }
   
    </>
  )
}

export default Dashboard
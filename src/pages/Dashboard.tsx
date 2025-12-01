import { useContext } from "react"
import { TransactionContext } from "../ctx/TransactionContext"
import TransactionCard from "../components/TransactionCard"
import FilterSection from "../components/FilterSection"

const Dashboard = () => {
  const {  displayedTransactions } = useContext(TransactionContext)

  return (
    <>
    <div className="text-center">My Payments Dashboard</div>
    <FilterSection/>

    {
      displayedTransactions?.length === 0 &&
      <p className="text-center">No transactions found</p>
    }
    {
      displayedTransactions?.length >0 &&
      <p className="text-center">{displayedTransactions.length} {displayedTransactions.length === 1 ? "transaction" : "transactions"} found</p>
    }
    <div className="container">
      <div className="transactionList">
        {
          displayedTransactions.map(transaction => {
            return(
              <TransactionCard transaction={transaction} key={transaction.id}/>
            )
          })
          //todo add pagination
        }
      </div>
    </div>
    </>
  )
}

export default Dashboard

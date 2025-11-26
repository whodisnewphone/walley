import { useContext } from "react"
import { TransactionContext } from "../ctx/TransactionContext"
import useFilter from "../hooks/useFilter"

const Dashboard = () => {
  const {displayedTransactions} = useContext(TransactionContext)
  const {filterByTransactionStatus} = useFilter()

  return (
    <>
    <div>My Payments Dashboard</div>

    <button>Upcoming payments</button>
    <section>
      {/* <button onClick={filterByTransactionStatus()} type="button" value="All">
        VIEW ALL
      </button> */}
      <button onClick={() => filterByTransactionStatus("completed")} type="button" value="completed">
        COMPLETED
      </button>
      <button onClick={() => filterByTransactionStatus("pending")} type="button" value="pending">
        PENDING
      </button>
      <button onClick={() => filterByTransactionStatus("failed")} type="button" value="failed">
        FAILED
      </button>
      <button onClick={() => filterByTransactionStatus("cancelled")} type="button" value="cancelled">
        CANCELLED
      </button>
      <button onClick={() => filterByTransactionStatus("active")} type="button" value="active">
        ACTIVE
      </button>
    </section>
    {/* <button onClick={filterByTransactionStatus('completed')}>Past payments</button> */}
{/* 
    <button>Filter by status</button>

    <button>Filter by date range</button>
    <button>Filter by payment type</button> */}
    {
      displayedTransactions.map(transaction => {
        return(
        <div className="transactionContainer" key={transaction.id}>
          <h6>{transaction.totalAmount}</h6>
          <p className="font-bold">{transaction.merchantName}</p>
          <p>{transaction.purchaseDate}</p>
          <p>{transaction.status}</p>
          <p>{transaction.paymentMethod.type}</p>
          <button>See more</button>
        </div>
        )
      })
    }
   
    </>
  )
}

export default Dashboard
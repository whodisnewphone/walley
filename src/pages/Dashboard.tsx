import { useContext } from "react"
import { TransactionContext } from "../ctx/TransactionContext"
import useFilter from "../hooks/useFilter"

const Dashboard = () => {
  const { displayedTransactions } = useContext(TransactionContext)
  const { filterByTransactionStatus, filterByPaymentType, filterByDate, filterByCustomDate } = useFilter()

  const startFilterByCustomDate = (formData: { get: (arg0: string) => any }) => {
    const inputDate = formData.get("customDate");
    const date = new Date(inputDate).toISOString()
    filterByCustomDate(date)
    //todo sanitize input
  }

  return (
    <>
    <div>My Payments Dashboard</div>

    <button>Upcoming payments</button>
    <section>
      <button onClick={() => filterByTransactionStatus()} type="button" value="All">
        VIEW ALL
      </button>
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

    <section>
      <button onClick={() => filterByPaymentType()} type="button" value="All">
        VIEW ALL
      </button>
      <button onClick={() => filterByPaymentType("full")} type="button" value="full">
        FULL
      </button>
      <button onClick={() => filterByPaymentType("installment")} type="button" value="installment">
        INSTALLMENTS
      </button>
    </section>

    <section>
      <button onClick={() => filterByDate("30")} type="button" value="30">
        LAST 30 DAYS
      </button>
      <button onClick={() => filterByDate("90")} type="button" value="90">
        LAST 90 DAYS
      </button>
      <button onClick={() => filterByDate("")} type="button" value="364">
        LAST YEAR
      </button>
      <form action={startFilterByCustomDate}>
        <label>BEFORE DATE:</label>
        <input type="date" name="customDate"/>
        <button type="submit">SEE CUSTOM DATE</button>
      </form>
      
    </section>

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
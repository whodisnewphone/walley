import { useContext, useEffect, useState, type FormEvent } from "react"
import { getDateInThePast } from "../utils/dateUtils"
import useFilter from "../hooks/useFilter"
import { TransactionContext } from "../ctx/TransactionContext"

const FilterSection = () => {
  const { 
    statusFilter, setStatusFilter, paymentTypeFilter, 
    setPaymentTypeFilter, dateFilter, setDateFilter,
    displayedTransactions 
  } = useContext(TransactionContext)
  const { filterByCriteria } = useFilter()

  const [dateFilterDouble, setDateFilterDouble] = useState<string>(null)
  const [dateInputValue, setDateInputValue] = useState<string>("")
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const startFilterByCustomDate = (e: FormEvent) => {
    e.preventDefault()
    const date = new Date(dateInputValue).toISOString();
    
    if (!date) {
      alert("Incorrect date format, please try again")
    }
    setDateFilter(date)
    setIsSubmitted(true)
    setDateFilterDouble("")
  }

  const startFilterByDays = (days: string) => {
    setDateFilterDouble(days)
    setDateInputValue("")

    let pastDate = getDateInThePast(days)
    setDateFilter(pastDate)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateInputValue(e.target.value);
    setIsSubmitted(false); 
  }

  useEffect(() => {
    filterByCriteria()
  }, [statusFilter, paymentTypeFilter, dateFilter])
  

  return (
    <>
        <div className="text-center">
      <p>Filter by status</p> 
      <section className="filterContainer">
        <button 
          onClick={() => setStatusFilter(null)} 
          type="button" 
          value="All"
          className={statusFilter === null ? "buttonActive" : ""}
        >
          VIEW ALL
        </button>
        <button 
          onClick={() => setStatusFilter("completed")} 
          type="button" 
          name="completed" 
          className={statusFilter === "completed" ? "buttonActive" : ""}
        >
          COMPLETED
        </button>
        <button 
          onClick={() => setStatusFilter("pending")} 
          type="button" 
          name="pending"
          className={statusFilter === "pending" ? "buttonActive" : ""}
        >
          PENDING
        </button>
        <button 
          onClick={() => setStatusFilter("failed")} 
          type="button" 
          name="failed"
          className={statusFilter === "failed" ? "buttonActive" : ""}
        >
          FAILED
        </button>
        <button 
          onClick={() => setStatusFilter("cancelled")} 
          type="button" 
          name="cancelled"
          className={statusFilter === "cancelled" ? "buttonActive" : ""}
        >
          CANCELLED
        </button>
        <button 
          onClick={() => setStatusFilter("active")} 
          type="button" 
          name="active"
          className={statusFilter === "active" ? "buttonActive" : ""}
        >
          ACTIVE
        </button>
      </section>
      <p>Filter by payment type</p>

      <section>
        <button
          onClick={() => setPaymentTypeFilter(null)} 
          type="button" 
          value="All"
          className={paymentTypeFilter === null ? "buttonActive" : ""}
        >
          VIEW ALL
        </button>
        <button 
          onClick={() => setPaymentTypeFilter("full")} 
          type="button" 
          name="full"
          className={paymentTypeFilter === "full" ? "buttonActive" : ""}
        >
          FULL
        </button>
        <button 
          onClick={() => setPaymentTypeFilter("installment")} 
          type="button" 
          value="installment"
          className={paymentTypeFilter === "installment" ? "buttonActive" : ""}
        >
          INSTALLMENTS
        </button>
      </section>

      <p>Filter by date</p>
      <section>
        <button 
          onClick={() => startFilterByDays("30")} 
          type="button" 
          value="30days"
          className={dateFilterDouble === "30" ? "buttonActive" : ""}
        >
          LAST 30 DAYS
        </button>
        <button 
          onClick={() => startFilterByDays("90")} 
          type="button" 
          name="90days"
          className={dateFilterDouble === "90" ? "buttonActive" : ""}
        >
          LAST 90 DAYS
        </button>
        <button 
          onClick={() => startFilterByDays("365")} 
          type="button" 
          name="lastyear"
          className={dateFilterDouble === "365" ? "buttonActive" : ""}>
          LAST YEAR
        </button>
        <form onSubmit={startFilterByCustomDate}>
          <label>BEFORE DATE: </label>
          <input 
            type="date" 
            name="customDate" 
            value={dateInputValue} 
            onChange={handleInputChange}
          />
          <span><button type="submit">GO</button></span>
        </form>
      </section>
    </div>
    </>
  )
}

export default FilterSection

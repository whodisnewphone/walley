import { useContext } from "react"
import { TransactionContext } from "../ctx/TransactionContext"
import { isDateInRange } from "../utils/dateUtils"

const useFilter = () => {
  const { transactions, setDisplayedTransactions, 
    statusFilter, paymentTypeFilter, dateFilter } = useContext(TransactionContext)

  const filterByCriteria = () => {
    let activeFilters: string[] = []

    //build up all the filter values so you only traverse the array once
    if (statusFilter) {
      activeFilters['status'] = statusFilter
    }

    if (paymentTypeFilter) {
      activeFilters['paymentType'] = paymentTypeFilter
    }

    if (dateFilter) {
      activeFilters['purchaseDate'] = dateFilter
    }

    let activeFiltersKeys = Object.keys(activeFilters)

    // if there are no active filters, display all the transactions
    if (activeFilters.length === 0) {
      setDisplayedTransactions(transactions)
    }

    let filteredData = transactions.filter(item => {
      return activeFiltersKeys.every(key => {
        if (key === "purchaseDate") {
          return isDateInRange(item.purchaseDate, dateFilter, new Date().toISOString())
        }
        return item[key] === activeFilters[key];
      });
    });
    setDisplayedTransactions(filteredData)
  }

  return { filterByCriteria }
}

export default useFilter;

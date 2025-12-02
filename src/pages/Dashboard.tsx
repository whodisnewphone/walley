import { useContext, useEffect, useState } from "react"
import { TransactionContext } from "../ctx/TransactionContext"
import TransactionCard from "../components/TransactionCard"
import FilterSection from "../components/FilterSection"

const Dashboard = () => {
  const { displayedTransactions } = useContext(TransactionContext)
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate fetching data to show a loader
    const fetchData = () => {
      return new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve("Data fetched successfully!");
        }, 1000);
      });
    };

    setIsLoading(true);

    fetchData().then(() => {
      setIsLoading(false);
    });
  }, [displayedTransactions]);
  
  return (
    <>
    <div className="text-center">My Payments Dashboard</div>
    <FilterSection/>

    {
      !isLoading && displayedTransactions?.length === 0 &&
      <p className="text-center">No transactions found</p>
    }
    {
      !isLoading && displayedTransactions?.length >0 &&
      <p className="text-center">{displayedTransactions.length} {displayedTransactions.length === 1 ? "transaction" : "transactions"} found</p>
    }
    <div className="container">
      { isLoading &&
        <div className="text-center">
          🌀 Loading transactions...
        </div>
      }
      {
        !isLoading &&
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
      }
    </div>
    </>
  )
}

export default Dashboard

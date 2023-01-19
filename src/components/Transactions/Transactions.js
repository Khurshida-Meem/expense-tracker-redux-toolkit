import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTransactions } from "../../features/transaction/transactionSlice";
import Tranjaction from "./Transaction";

const Tranjactions = () => {
  const { transactions, isLoading, isError } = useSelector(
    (state) => state.transaction
  );

  const newTransaction = [...transactions];

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTransactions({search: "", type:""}));
  },[dispatch])

  let content = null;


  if (isLoading) {
    content = <p>Loading...</p>;
  }
  

  if (!isLoading && isError) {
    content = <p className="error">An Error Occured</p>;
  }
  if (!isLoading && !isError && transactions.length > 0) {
    content = newTransaction.reverse().splice(0,5).map((transaction) => (
      <Tranjaction key={transaction.id} transaction={transaction} />
    ));
  }

  console.log(transactions)

  if (!isLoading && !isError && transactions.length === 0) {
    content = <p>No transactions found</p>;
  }

  
  return (
    <>
      <p className="second_heading">My Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
        <span className="pointer" onClick={() => navigate('/all-transactions')}>View More</span>
      </div>
    </>
  );
};

export default Tranjactions;

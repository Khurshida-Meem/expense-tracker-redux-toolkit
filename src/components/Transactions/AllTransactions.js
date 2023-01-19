import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTransactions } from "../../features/transaction/transactionSlice";
import Form from "../Form";
import Filters from "./Filters";
import Tranjaction from "./Transaction";

const AllTransactions = () => {
  const { transactions, isLoading, isError } = useSelector(
    (state) => state.transaction
  );

  const { search, type } = useSelector((state) => state.filters);

  const newTransaction = [...transactions];

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTransactions({ search, type }));
  }, [dispatch, type, search]);

  let content = null;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (!isLoading && isError) {
    content = <p className="error">An Error Occured</p>;
  }
  if (!isLoading && !isError && transactions.length > 0) {
    content = newTransaction
      .reverse()
      .map((transaction) => (
        <Tranjaction key={transaction.id} transaction={transaction} />
      ));
  }

  if (!isLoading && !isError && transactions.length === 0) {
    content = <p>No transactions found</p>;
  }
  return (
    <div>
    <span onClick={() => navigate("/")} className="pointer">Go Back</span>
      <div>
        <Form />
      </div>
      <Filters />
      <div>{content}</div>
    </div>
  );
};

export default AllTransactions;

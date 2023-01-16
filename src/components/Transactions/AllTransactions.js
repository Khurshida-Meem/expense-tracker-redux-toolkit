import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../features/transaction/transactionSlice";
import Form from "../Form";
import Tranjaction from "./Transaction";

const AllTransactions = () => {
  const [search, setSearch] = useState("");

  const { transactions, isLoading, isError } = useSelector(
    (state) => state.transaction
  );

  const [type, setType] = useState("");

  const newTransaction = [...transactions];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

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
      <div>
        <Form />
      </div>
      <div className="flex mt10">
        <div className="form-group radio">
          <div className="radio_group">
            <input
              type="radio"
              required
              value="income"
              name="type"
              checked={type === "income"}
              onChange={(e) => setType("income")}
            />
            <label>Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="type"
              placeholder="Expense"
              checked={type === "expense"}
              onChange={(e) => setType("expense")}
            />
            <label>Expense</label>
          </div>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Search"
          value={search}
          required
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>{content}</div>
    </div>
  );
};

export default AllTransactions;

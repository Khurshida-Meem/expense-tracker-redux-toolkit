import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Filters = () => {
  const [input, setInput] = useState("");

  const { search, type } = useSelector((state) => state.filters);

  const [typeIncome, setTypeIncome] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex mt10">
        <div className="form-group radio">
          <div className="radio_group">
            <input
              type="radio"
              value="income"
              name="type"
              checked={typeIncome === "income"}
              onChange={(e) => setTypeIncome("income")}
            />
            <label>Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="type"
              placeholder="Expense"
              checked={typeIncome === "expense"}
              onChange={(e) => setTypeIncome("expense")}
            />
            <label>Expense</label>
          </div>
        </div>
        <input
          type="text"
          name="input"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Filters;

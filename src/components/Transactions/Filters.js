import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  reset,
  searched,
  selectedType,
} from "../../features/filter/filterSlice";

const Filters = () => {
  const [input, setInput] = useState("");

  const [typeIncome, setTypeIncome] = useState("");
  const dispatch = useDispatch();

  return (
    <form>
      <div className="flex mt10">
        <div className="form-group radio">
          <div className="radio_group">
            <input
              type="radio"
              value="income"
              name="type"
              checked={typeIncome === "income"}
              onChange={(e) => {
                e.preventDefault();
                setTypeIncome("income");
                dispatch(selectedType("income"));
              }}
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
              onChange={(e) => {
                e.preventDefault();
                setTypeIncome("expense");
                dispatch(selectedType("expense"));
              }}
            />
            <label>Expense</label>
          </div>
        </div>
        <input
          type="text"
          name="input"
          placeholder="Search"
          value={input}
          onChange={(e) => {
            e.preventDefault();
            setInput(e.target.value);
            dispatch(searched(e.target.value));
          }}
        />
      </div>
      <button
      style={{width: "25%"}}
        className="btn cancel_edit"
        onClick={(e) => {
          e.preventDefault();
          dispatch(reset());
          setTypeIncome("");
          setInput("");
        }}
      >
        Reset
      </button>
    </form>
  );
};

export default Filters;

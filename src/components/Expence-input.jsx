import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../features/slices/expense-slice";

const ExpenceInput = () => {
  const [amountExpence, setAmountExpence] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExpense({ amount: +amountExpence }));
    setAmountExpence(0);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter amount"
        id=""
        value={amountExpence}
        onChange={(e) => setAmountExpence(e.target.value)}
      />
      <button>add expence</button>
    </form>
  );
};

export default ExpenceInput;

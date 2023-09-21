import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAmount } from "../features/slices/component-slice";
import { addExpense } from "../features/slices/expense-slice";
const BudgetInput = ({ id }) => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setValue(+e.target.value);
    console.log(setValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAmount({ id, value }));
    dispatch(addExpense({ amount: +value }));
    setValue(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={`input-${id}`}>Amount:</label>
      <input
        type="number"
        id={`input-${id}`}
        value={value}
        onChange={handleInputChange}
        placeholder="enter your amount"
      />
      <button>aff amount</button>
    </form>
  );
};

export default BudgetInput;

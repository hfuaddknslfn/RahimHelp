import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome } from "../features/slices/income-slice";

const IncomeInput = () => {
  const [amountIncome, setAmountIncome] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addIncome({ amount: +amountIncome }));
    setAmountIncome(0);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter Islam lybov"
        id=""
        value={amountIncome}
        onChange={(e) => setAmountIncome(e.target.value)}
      />
      <button>add expence</button>
    </form>
  );
};

export default IncomeInput;

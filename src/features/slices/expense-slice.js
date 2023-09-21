import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
  totalAmountExpense: 0,
};

export const addExpense = createAsyncThunk(
  "expense/addExpense",
  async (expense, { getState, dispatch }) => {
    const currentExpenses = getState().expense.expenses;
    const newExpenses = [...currentExpenses, expense];
    console.log(newExpenses);
    return newExpenses;
  }
);

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {},
  extraReducers: {
    [addExpense.fulfilled]: (state, action) => {
      state.expenses = action.payload;
      state.totalAmountExpense = state.expenses.reduce(
        (acc, expence) => acc + expence.amount,
        0
      );
      console.log(state.expenses);
    },
  },
});

export default expenseSlice.reducer;

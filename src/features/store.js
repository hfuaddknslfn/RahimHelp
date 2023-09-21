import { configureStore } from "@reduxjs/toolkit";
import incomeSlice from "./slices/income-slice";
import expenseSlice from "./slices/expense-slice";
import componentSlice from "./slices/component-slice";

export const store = configureStore({
  reducer: {
    income: incomeSlice,
    expense: expenseSlice,
    components: componentSlice,
  },
});

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  finanses: [
    {
      id: 1,
      amount: 0,
      title: "Income",
    },
    {
      id: 2,
      amount: 0,
      title: "Git",
    },
    {
      id: 3,
      amount: 0,
      title: "trans",
    },
    {
      id: 4,
      amount: 0,
      title: "momomomomomson",
    },
    {
      id: 5,
      amount: 0,
      title: "expenxes",
    }
  ]
};

const amountSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    addAmount: (state, action) => {
      const { id, value } = action.payload;
      state.finanses = state.finanses.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: item.amount + value,
          };
        }
        return item;
      });
    }
  }
});

export const { addAmount } = amountSlice.actions;
export default amountSlice.reducer;

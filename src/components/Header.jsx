import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const totalAmountExpence = useSelector(
    (state) => state.expense.totalAmountExpense
  );
  const totalAmountIncome = useSelector(
    (state) => state.income.totalAmountIncome
  );

  const frinanceTracker = useMemo(() => {
    if (totalAmountExpence || totalAmountIncome) {
      if (totalAmountExpence < totalAmountIncome) {
        return <span>{-totalAmountExpence + totalAmountIncome}</span>;
      } else if (totalAmountExpence > totalAmountIncome) {
        return <span>{-totalAmountExpence + totalAmountIncome}</span>;
      }
    } else {
      return 0;
    }
  }, [totalAmountExpence, totalAmountIncome]);

  return <h1>ваш счет : {frinanceTracker}</h1>;
};

export default Header;

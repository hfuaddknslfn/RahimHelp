import React, { useState } from "react";
import { useSelector } from "react-redux";
import IncomeInput from "../components/Income-input";
import ExpenceInput from "../components/Expence-input";
import BugdetInput from "../components/Bugdet-input";
import Modal from "../components/Modal";

const Main = () => {
  const [children, setChildren] = useState(null);
  const [modal, setModalActive] = useState(null);

  const totalAmountExpence = useSelector(
    (state) => state.expense.totalAmountExpense
  );
  const totalAmountIncome = useSelector(
    (state) => state.income.totalAmountIncome
  );

  const handleModal = (item) => {
    setModalActive(true);
    setChildren(item);
  };

  const arrComp = useSelector((state) => state.components.finanses);

  return (
    <div>
      <h1>money tracker</h1>
      <p>our {totalAmountExpence} </p>
      <p>our {totalAmountIncome} </p>
      <div className="ogogo">
        {arrComp.map((item) => (
          <div key={item.id} className="jojojo">
            <button onClick={() => handleModal(item)}>{item.title}</button>
            <ins>{item.amount}</ins>
            <p>{item.amount}</p>
            <BugdetInput id={item.id} />
          </div>
        ))}
      </div>
      <Modal
        active={modal}
        setModalActive={setModalActive}
        children={children}
      />
      <section>
        <IncomeInput />
        <ExpenceInput />
      </section>
    </div>
  );
};

export default Main;

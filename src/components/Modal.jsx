import React from "react";

const Modal = ({ active, setModalActive, children }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setModalActive(false)}
    >
      <div
        className={active ? "modal_content active" : "modal_content"}
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  );
};

export default Modal;

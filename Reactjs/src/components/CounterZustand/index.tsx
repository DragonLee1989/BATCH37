import useBankStore from "../Hook/useBankStore";
// import React, { useState } from "react";

const CounterZustand = () => {
  //Truy cập vào store
  const { count, increment, decrement } = useBankStore();
  return (
    <div>
      <h2>Banking Zustand</h2>
      <p>count: {count}</p>
      <div>
        <button
          className="btn"
          onClick={() => {
            increment(10);
          }}
        >
          Tăng 10
        </button>
        <button
          className="btn"
          onClick={() => {
            decrement(5);
          }}
        >
          Giảm 5
        </button>
      </div>
    </div>
  );
};

export default CounterZustand;

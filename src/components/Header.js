import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
function Header() {
  let { task } = useContext(GlobalContext);
  let total = task
    .reduce((acc, total) => {
      acc += total.amount;
      return acc;
    }, 0)
    .toFixed(2);

  return (
    <div className="header">
      <h2>Expense Tracker</h2>
      <h3>Your Balance</h3>
      <h2>₹ {total}</h2>
    </div>
  );
}

export default Header;

import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

function HeaderCard() {
  let { task } = useContext(GlobalContext);
  let Incomeamount = task
    .filter((item) => item.amount >= 0)
    .reduce((acc, totl) => (acc += totl.amount), 0)
    .toFixed(2);

  let expense = task
    .filter((item) => item.amount < 0)
    .reduce((acc, tot) => (acc += tot.amount), 0)
    .toFixed(2);

  return (
    <div className="header__card">
      <div className="header__card__left">
        <h4>Income</h4>
        <p>₹ {Incomeamount}</p>
      </div>
      <div className="header__card__right">
        <h4>Expense</h4>
        <p>₹ {expense}</p>
      </div>
    </div>
  );
}

export default HeaderCard;

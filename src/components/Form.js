import React, { useState, useContext } from "react";
import GlobolContext from "../context/GlobalContext";

function Form() {
  const { add } = useContext(GlobolContext);
  const [text, settext] = useState("");
  let [amount, setAmount] = useState(0);
  let id = Math.floor(Math.random() * 1000);
  let newTrans = {
    id,
    text,
    amount: parseInt(amount),
  };
  amount = parseInt(amount);
  const handleSub = (e) => {
    e.preventDefault();
    add(newTrans);
    settext("");
    setAmount(0);
  };
  return (
    <div className="form__container">
      <form onSubmit={handleSub} action="">
        <label htmlFor="">Text</label>
        <input
          required
          value={text}
          onChange={(e) => settext(e.target.value)}
          placeholder="Enter Text"
          type="text"
        />
        <label htmlFor="">Amount</label>
        <input
          value={amount || ""}
          required
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          placeholder="Enter Amount"
          type="text"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;

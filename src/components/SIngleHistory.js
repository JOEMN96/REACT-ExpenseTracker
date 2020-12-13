import React from "react";
import GlobolContext from "../context/GlobalContext";

function SIngleHistory(props) {
  const [View, setView] = React.useState(0);
  const { id, text, amount } = props.props;
  const { remove } = React.useContext(GlobolContext);
  return (
    <div
      key={id}
      onMouseEnter={() => setView(1)}
      onMouseLeave={() => setView(0)}
      className={`history__card  ${
        (amount < 0 && "minus") || (amount >= 0 && "plus")
      }`}
    >
      <p>{text}</p>
      <p> {amount}</p>
      <h4 onClick={() => remove(id)} className={`delete  ${View && "view"}`}>
        x
      </h4>
    </div>
  );
}

export default SIngleHistory;

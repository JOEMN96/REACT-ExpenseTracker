import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import SIngleHistory from "./SIngleHistory";

function History() {
  let { task } = useContext(GlobalContext);

  let histr = task.map((t) => {
    return <SIngleHistory key={t.id} props={t} />;
  });

  return (
    <div className="history__wrapper">
      <h4>History</h4>
      {histr}
    </div>
  );
}

export default History;

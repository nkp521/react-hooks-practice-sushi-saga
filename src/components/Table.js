import React from "react";

function Table({ plates = [], sushiCost }) {
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  let moneyRemaining = 1000 - sushiCost;

  return (
    <>
      <h1 className="remaining">You have: ${moneyRemaining} remaining!</h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;

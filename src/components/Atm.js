import React, { useState } from "react";

const Atm = ({ setWallet, budget }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setWallet(Number(amount) + budget);
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="ATM">
      <h3>ATM</h3>
      <input
        type="number"
        min="1.00"
        max="250.00"
        step="1.00"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="$250 Maximum"
      />
      <button type="submit">Withdraw Money</button>
    </form>
  );
};
export default Atm;

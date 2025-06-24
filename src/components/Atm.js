import React, { useState } from "react";

const Atm = ({ setWallet }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setWallet((wallet) => wallet + Number(amount));
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
        placeholder="$250 Max"
      />
      <button type="submit">Withdraw Money</button>
    </form>
  );
};
export default Atm;

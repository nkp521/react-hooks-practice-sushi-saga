import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import Atm from "./Atm";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [eatenSushi, setEatenSushi] = useState([]);
  const [sushiCost, setSushiCost] = useState(0);
  const [wallet, setWallet] = useState(100);

  const budget = wallet - sushiCost;

  return (
    <div className="app">
      <SushiContainer
        sushis={sushis}
        setSushis={setSushis}
        API={API}
        eatenSushi={eatenSushi}
        setEatenSushi={setEatenSushi}
        setSushiCost={setSushiCost}
        sushiCost={sushiCost}
        wallet={wallet}
        budget={budget}
      />
      <Table plates={eatenSushi} budget={budget} />
      <Atm setWallet={setWallet} budget={budget} />
    </div>
  );
}

export default App;

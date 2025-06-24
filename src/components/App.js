import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [eatenSushi, setEatenSushi] = useState([]);
  const [sushiCost, setSushiCost] = useState(0);

  const budget = 100 - sushiCost;

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
      />
      <Table plates={eatenSushi} budget={budget} />
    </div>
  );
}

export default App;

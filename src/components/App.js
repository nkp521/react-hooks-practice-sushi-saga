import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [eatenSushi, setEatenSushi] = useState([]);

  return (
    <div className="app">
      <SushiContainer
        sushis={sushis}
        setSushis={setSushis}
        API={API}
        eatenSushi={eatenSushi}
        setEatenSushi={setEatenSushi}
      />
      <Table plates={eatenSushi} />
    </div>
  );
}

export default App;

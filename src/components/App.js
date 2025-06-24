import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  return (
    <div className="app">
      <SushiContainer sushis={sushis} setSushis={setSushis} API={API} />
      <Table />
    </div>
  );
}

export default App;

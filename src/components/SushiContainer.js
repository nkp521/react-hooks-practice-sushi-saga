import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ setSushis, sushis, API }) {
  const [moreSushi, setMoreSushi] = useState([0]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setSushis(data);
      });
  }, []);

  const renderSushi = () =>
    sushis
      .slice(moreSushi, setMoreSushi + 4)
      .map((sushi) => <Sushi key={sushi.id} sushi={sushi} />);

  return (
    <div className="belt">
      {renderSushi()}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;

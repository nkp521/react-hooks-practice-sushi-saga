import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({
  setSushis,
  sushis,
  API,
  eatenSushi,
  setEatenSushi,
  setSushiCost,
  sushiCost,
}) {
  const [moreSushi, setMoreSushi] = useState(0);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setSushis(data);
      });
  }, []);

  const renderSushi = () =>
    sushis
      .slice(moreSushi, moreSushi + 4)
      .map((sushi) => (
        <Sushi
          key={sushi.id}
          sushi={sushi}
          handleEaten={handleEaten}
          eatenSushi={eatenSushi}
        />
      ));

  const handleNextSushi = () => {
    setMoreSushi((moreSushi) =>
      moreSushi + 4 >= sushis.length ? 0 : moreSushi + 4
    );
  };
  const handleEaten = (sushi) => {
    if (!eatenSushi.includes(sushi.id)) {
      setEatenSushi([...eatenSushi, sushi.id]);
      setSushiCost(sushiCost + sushi.price);
    }
  };

  return (
    <div className="belt">
      {renderSushi()}
      <MoreButton handleNextSushi={handleNextSushi} />
    </div>
  );
}

export default SushiContainer;

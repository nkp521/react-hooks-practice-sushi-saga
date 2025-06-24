import React, { useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ setSushis, sushis, API }) {
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setSushis(data);
      });
  }, []);

  const renderSushi = () =>
    sushis.map((sushi) => <Sushi key={sushi.id} sushi={sushi} />);

  return (
    <div className="belt">
      {renderSushi()}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;

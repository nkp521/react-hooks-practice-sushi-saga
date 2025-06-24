import React from "react";

function Sushi({ sushi, eatenSushi, handleEaten }) {
  const { name, img_url, price, id } = sushi;

  const eaten = eatenSushi.includes(id);

  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleEaten(sushi)}>
        {eaten ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;

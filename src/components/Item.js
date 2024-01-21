import React from "react";

function Item(){
  const itemName = "Blue Mountain Coffee";
  const itemRoastLevel = "Medium";
  const itemOrigin = "Jamaica";
  const itemPrice = 12;
  const itemQuantity = 130;
  
  return (
    <React.Fragment>
      <h3>Name: {itemName}</h3>
      <h3>Roast Level: {itemRoastLevel}</h3>
      <h3>Origin: {itemOrigin}</h3>
      <h3>Price: {itemPrice}</h3>
      <h3>Quantity: {itemQuantity}</h3>
      <h3>Total: {itemQuantity * itemPrice}</h3>
      <hr/>
    </React.Fragment>
  );
}

export default Item;
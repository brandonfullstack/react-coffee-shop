import React from "react";
import Item from "./Item";

const mainInventory = [
  {
    itemName: "Blue Mountain Coffee",
    itemRoastLevel: "Medium",
    itemOrigin: "Jamaica",
    itemPrice: 12,
    itemQuantity: 130
  },
  {
    itemName: "Arabica Coffee",
    itemRoastLevel: "Medium",
    itemOrigin: "Ethiopia",
    itemPrice: 12,
    itemQuantity: 130
  }
];

function Inventory() {
  return (
    <React.Fragment>
      <hr/>
      {mainInventory.map((item, index) =>
        <Item itemName={item.itemName}
          itemRoastLevel={item.itemRoastLevel}
          itemOrigin={item.itemOrigin}
          itemPrice={item.itemPrice}
          itemQuantity={item.itemQuantity}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default Inventory;
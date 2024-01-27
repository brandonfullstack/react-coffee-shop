import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

// const mainInventory = [
//   {
//     itemName: "Blue Mountain Coffee",
//     itemRoastLevel: "Medium",
//     itemOrigin: "Jamaica",
//     itemPrice: 12,
//     itemQuantity: 130
//   },
//   {
//     itemName: "Arabica Coffee",
//     itemRoastLevel: "Medium",
//     itemOrigin: "Ethiopia",
//     itemPrice: 12,
//     itemQuantity: 130
//   }
// ];

function Inventory(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.inventory.map((item, index) =>
        <Item name={item.name}
          origin={item.origin}
          roastLevel={item.roastLevel}
          price={item.price}
          quantity={item.quantity}
          key={index} />
      )}
    </React.Fragment>
  );
}

Inventory.propTypes = {
  inventory: PropTypes.array
};

export default Inventory;
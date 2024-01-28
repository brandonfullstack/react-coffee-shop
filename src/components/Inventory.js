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
      <hr />
      {props.inventory.map((item) =>
        <Item
          whenItemClicked={props.onItemSelection} name={item.name}
          origin={item.origin}
          roastLevel={item.roastLevel}
          price={item.price}
          quantity={item.quantity}
          id={item.id}
          key={item.id} />
      )}
    </React.Fragment>
  );
}

Inventory.propTypes = {
  inventory: PropTypes.array,
  onItemSelection: PropTypes.func
};

export default Inventory;
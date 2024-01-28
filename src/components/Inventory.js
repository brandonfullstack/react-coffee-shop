import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function Inventory(props) {
  
  if (!props.inventory || props.inventory.length === 0) {
    return<p>Please add coffee to track.</p>
  }
  return (
    <React.Fragment>
      {props.inventory.map((item) => (
        <div key={item.id}>
          <Item
            whenItemClicked={props.onItemSelection}
            name={item.name}
            origin={item.origin}
            roastLevel={item.roastLevel}
            price={item.price}
            quantity={item.quantity}
            id={item.id}
            key={item.id} />
        </div>
      ))}
    </React.Fragment>
  );
}

Inventory.propTypes = {
  inventory: PropTypes.array,
  onItemSelection: PropTypes.func
};

export default Inventory;
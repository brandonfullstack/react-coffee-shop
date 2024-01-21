import React from "react";
import PropTypes from "prop-types";

function Item(props){  
  return (
    <React.Fragment>
      <h3>Name: {props.itemName}</h3>
      <h3>Roast Level: {props.itemRoastLevel}</h3>
      <h3>Origin: {props.itemOrigin}</h3>
      <h3>Price: {props.itemPrice}</h3>
      <h3>Quantity: {props.itemQuantity}</h3>
      <h3>Total: {props.itemQuantity * props.itemPrice}</h3>
      <hr/>
    </React.Fragment>
  );
}

Item.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemRoastLevel: PropTypes.string.isRequired,
  itemOrigin: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
  itemQuantity: PropTypes.number.isRequired
};

export default Item;
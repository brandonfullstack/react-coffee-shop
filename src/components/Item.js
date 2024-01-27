import React from "react";
import PropTypes from "prop-types";

function Item(props){  
  return (
    <React.Fragment>
      <h3>Name: {props.name}</h3>
      <h3>Origin: {props.origin}</h3>
      <h3>Roast Level: {props.roastLevel}</h3>
      <h3>Price: {props.price}</h3>
      <h3>Quantity: {props.quantity}</h3>
      <h3>Total: {props.quantity * props.price}</h3>
      <hr/>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  roastLevel: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
};

export default Item;
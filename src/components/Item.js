import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenItemClicked(props.id)}>
        <h3>Name: {props.name}</h3>
        <h3>Origin: {props.origin}</h3>
        <h3>Roast Level: {props.roastLevel}</h3>
        <h3>Price: {props.price}</h3>
        <h3>Quantity: {props.quantity}</h3>
        <h3>Total: {props.quantity * props.price}</h3>
        <hr />
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roastLevel: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;
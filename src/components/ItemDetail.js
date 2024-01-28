import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const { item, onClickingDelete, onClickingEdit, onClickingModifyItemQuantity } = props;

  function handleIncrementingQuantity(){
    onClickingModifyItemQuantity(item, 1);
  }

  function handleDecrementingQuantity(){
    onClickingModifyItemQuantity(item, -1);
  }

  return (
    <React.Fragment>
      <h3>Item Detail</h3>
      <p>Name: {item.name}</p>
      <p>Origin: {item.origin}</p>
      <p>Roast Level: {item.roastLevel}</p>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => onClickingEdit(item.id) }>Update Item</button>
      <button onClick={() => onClickingDelete(item.id)}>Delete Item</button>
      <button onClick={handleIncrementingQuantity}>Buy</button>
      <button onClick={handleDecrementingQuantity}>Sell</button>
      <hr />
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingModifyItemQuantity: PropTypes.func
};

export default ItemDetail;
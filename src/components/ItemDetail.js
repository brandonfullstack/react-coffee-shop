import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const { item, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h3>Item Detail</h3>
      <h4>Name: {item.name}</h4>
      <h4>Origin: {item.origin}</h4>
      <h4>Roast Level: {item.roastLevel}</h4>
      <h4>Price: {item.price}</h4>
      <h4>Quantity: {item.quantity}</h4>
      <button onClick={ props.onClickingEdit }>Update Item</button>
      <button onClick={() => onClickingDelete(item.id)}>Delete Item</button>
      <hr />
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ItemDetail;
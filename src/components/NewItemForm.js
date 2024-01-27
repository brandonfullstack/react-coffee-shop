import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewItemForm(props){

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.name.value, 
      origin: event.target.origin.value,
      roastLevel: event.target.roastLevel.value,
      price: parseInt(event.target.price.value),
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    });
    console.log(event.target.name.value);
    console.log(event.target.origin.value);
    console.log(event.target.roastLevel.value);
    console.log(event.target.price.value);
    console.log(event.target.quantity.value);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name' /><br></br>
        <input
          type='text'
          name='origin'
          placeholder='Origin' /><br></br>
        <input
          type='text'
          name='roastLevel'
          placeholder='Roast Level' /><br></br>
        <input
          type='text'
          name='price'
          placeholder='Price' /><br></br>
        <input
          type='text'
          name='quantity'
          placeholder='Quantity' /><br></br>
        <button type='submit'>Add</button>
      </form>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;
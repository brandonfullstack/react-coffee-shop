import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          required /><br></br>
        <input
          type='text'
          name='origin'
          placeholder='Origin'
          required /><br></br>
        <select name='roastLevel'>
          <option value="Light">Light</option>
          <option value="Light-Medium">Light-Medium</option>
          <option value="Full Medium">Full Medium</option>
          <option value="Medium-Dark">Medium-Dark</option>
          <option value="Dark">Dark</option>
        </select><br></br>
        <input
          type='text'
          name='price'
          placeholder='Price'
          required /><br></br>
        <input
          type='number'
          name='quantity'
          min="1"
          max="130"
          defaultValue="130"
          placeholder='Quantity'
          required /><br></br>
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
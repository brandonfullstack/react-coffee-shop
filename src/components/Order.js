import React from "react";

function Order(){
  const buyer = "Starbucks";
  const orderNumber = "12345";
  const quantity = "1";
  
  return (
    <React.Fragment>
      <h3>Order Number: {orderNumber}</h3>
      <h3>Company: {buyer}</h3>
      <h3>Quantity: {quantity}</h3>
      <h3>Total: ({quantity} x 5)</h3>
      <hr/>
    </React.Fragment>
  );
}

export default Order;
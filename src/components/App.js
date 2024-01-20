import React from "react";
import Header from "./Header";
import OrderList from "./OrderList";

function App(){
  return (
    <React.Fragment>
      <Header />
      <OrderList />
      <hr/>
    </React.Fragment>
  );
}

export default App;
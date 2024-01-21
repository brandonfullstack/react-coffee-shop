import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";

function App(){
  return (
    <React.Fragment>
      <Header />
      <Inventory />
      <hr/>
    </React.Fragment>
  );
}

export default App;
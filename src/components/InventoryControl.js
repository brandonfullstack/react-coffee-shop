import React from 'react';
import NewItemForm from './NewItemForm';
import Inventory from './Inventory';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let addItemButton = null; // new code
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm />
    } else {
      currentlyVisibleState = <Inventory />
      addItemButton = <button onClick={this.handleClick}>Add item</button>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addItemButton}
      </ React.Fragment>
    );
  }


}

export default InventoryControl;
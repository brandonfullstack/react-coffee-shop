import React from 'react';
import NewItemForm from './NewItemForm';
import Inventory from './Inventory';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventory: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewItemToInventory = (newItem) => {
    const newMainInventory = this.state.mainInventory.concat(newItem);
    this.setState({mainInventory: newMainInventory,
                  formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToInventory}/>;
      buttonText = "Return to Inventory";
    } else {
      currentlyVisibleState = <Inventory inventory={this.state.mainInventory} />;
      buttonText = "Add Item";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }


}

export default InventoryControl;
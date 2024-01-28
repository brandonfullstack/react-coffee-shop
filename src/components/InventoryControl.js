import React from 'react';
import NewItemForm from './NewItemForm';
import Inventory from './Inventory';
import ItemDetail from './ItemDetail';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventory: [],
      selectedItem: null
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewItemToInventory = (newItem) => {
    const newMainInventory = this.state.mainInventory.concat(newItem);
    this.setState({
      mainInventory: newMainInventory,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainInventory.filter(item => item.id === id)[0];
    this.setState({ selectedItem: selectedItem });
  }

  handleDeletingItem = (id) => {
    const newMainInventory = this.state.mainInventory.filter(item => item.id !== id);
    this.setState({
      mainInventory: newMainInventory,
      selectedItem: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail item={this.state.selectedItem} onClickingDelete = {this.handleDeletingItem} />
      buttonText = "Return to Inventory";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToInventory} />;
      buttonText = "Return to Inventory";
    } else {
      currentlyVisibleState = <Inventory inventory={this.state.mainInventory} onItemSelection={this.handleChangingSelectedItem} />;
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
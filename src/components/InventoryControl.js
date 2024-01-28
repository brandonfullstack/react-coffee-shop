import React from 'react';
import NewItemForm from './NewItemForm';
import Inventory from './Inventory';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventory: [],
      selectedItem: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewInventoryItem = (newItem) => {
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

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingInventoryItem = (itemToEdit) => {
    const editedMainInventory = this.state.mainInventory
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(itemToEdit);
    this.setState({
      mainInventory: editedMainInventory,
      editing: false,
      selectedItem: null
    });
  }

  handleModifyingItemQuantity = (itemToModify, delta) => {
    const modifiedQuantity = itemToModify.quantity + delta;

    if (modifiedQuantity >= 0 && modifiedQuantity <= 130) {
      const modifiedItem = { ...itemToModify, quantity: modifiedQuantity };

      const newMainInventory = this.state.mainInventory
        .filter(item => item.id !== itemToModify.id)
        .concat(modifiedItem);

      this.setState({
        mainInventory: newMainInventory,
        selectedItem: modifiedItem
      });
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditItemForm item={this.state.selectedItem} onEditItem={this.handleEditingInventoryItem} />
      buttonText = "Return to Inventory";
    }
    else if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail item={this.state.selectedItem} onClickingDelete={this.handleDeletingItem} onClickingEdit={this.handleEditClick} onClickingModifyItemQuantity={this.handleModifyingItemQuantity} />
      buttonText = "Return to Inventory";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewInventoryItem} />;
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
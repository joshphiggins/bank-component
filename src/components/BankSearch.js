import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UsStateForm from './StateForm';
import BankTable from './BankTable';
import SearchBar from './SearchBar';
const BANKS = require('../data/bank-search.js');

filterTable = (value, type) => {
  switch (type) {
    case 'filterText':
      this.setState({filterText: val});
      break;
    case 'filterUsState':
      this.setState({filterUsState: val})
    default:
      break;
  }
}

filterBy = () => {
  let filteredItems = this.state.bks;
  let state = this.state;
  ["filterText", "filterUsState"].forEach(function(filterBy){
    let filterValue = state[filterBy]
  })
}
class FilterableBankTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      filterUsState: '',
      bks: BANKS.bks
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleFilterUsState = this.handleFilterUsState.bind(this);
    //this.handleChildUpdates = this.handleChildUpdates.bind(this);
  };
  handleFilterTextInput(filterText){
    console.log('Text: ' + filterText)

    this.setState({
      filterText: filterText
    });
  }
  handleFilterUsState(filterUsState){
    console.log('State: ' + filterUsState.value)
    this.setState({
      filterUsState: filterUsState.value
    });
  }

  const filterBankRows = (filterText) => {
      let updatedList = this.state.bks;
      updatedList = updatedList.filter(function(item){
        return item.toLowerCase().search(
          filterText.value.toLowerCase()) !== -1;
        });
    }

  /*handleChildUpdates(filterUsState, filterText){
    console.log('State ' + filterUsState.value)
    console.log('Text ' + filterText)
    /*const filterBankRows = (filterText) => {
      let updatedList = this.state.bks;
      updatedList = updatedList.filter(function(item){
        return item.toLowerCase().search(
          filterText.value.toLowerCase()) !== -1;
        });
    }
    this.setState({
      filterText: filterText,
      filterUsState: filterUsState.value,
      bks: BANKS.bks //filterBankRows
    })
  }*/


    // this.setState({items: updatedList});

// 1- currently intial state is being set by passing BANK.bks
// need to have a function in the parent component that is doing the filter action
// then pass that down too the table as a prop
// 2 - once the search or the state filter is set then funciton in parent comp
// gets updates and passed down to the child
  render () {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <UsStateForm
          bks={this.state.bks}
          filterUsState={this.state.filterUsState}
          onFilterUsState={this.handleFilterUsState}
        />
        <BankTable
        bks={this.state.bks}
        filterText={this.state.filterText}
        filterUsState={this.state.filterUsState}
        />
      </div>
    );
  }
}

FilterableBankTable.propTypes = {
  filterText: PropTypes.string
}

export default FilterableBankTable;

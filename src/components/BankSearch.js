import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UsStateForm from './StateForm';
import BankTable from './BankTable';
import SearchBar from './SearchBar';

class FilterableBankTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      filterUsState: '',
      bks: this.props.bks
    };
  };
  filterItems = (value, type) => {
    switch (type) {
      case 'filterText':
        this.setState({filterText: value});
        break;
      case 'filterUsState':
        this.setState({filterUsState: value})
        break;
      default:
        break;
    }
  }
  render () {
    let filteredItems = this.props.bks;
    let state = this.state;
    ["filterText", "filterUsState"].forEach((filterBy) => {
      let filterValue = state[filterBy];
      let filterByKey = {filterText: 'name', filterUsState: 'state'}
      let filterObj = filterByKey[filterBy];
      if(filterValue){
        filteredItems = filteredItems.filter((item) => {
          if(filterBy === "filterText"){
            return item[filterObj].toLowerCase().search(
              filterValue.toLowerCase()) !== -1;
          } else {
            return item[filterObj] === filterValue;
          }
        });
      }
    });

    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.filterItems}
        />
        <UsStateForm
          bks={this.state.bks}
          filterUsState={this.state.filterUsState}
          onFilterUsState={this.filterItems}
        />
        <BankTable
        bks={filteredItems}
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

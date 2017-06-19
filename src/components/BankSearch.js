import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UsStateButton from './StateForm';
import AssetButton from './AssetButton';
import BankTable from './BankTable';
import SearchBar from './SearchBar';
import { ButtonToolbar } from 'react-bootstrap';

class FilterableBankTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      filterUsState: '',
      filterAssetHigh: '',
      filterAssetLow: '',
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
      case 'filterAssetHigh':
        this.setState({filterAssetHigh: value})
        break;
      case 'filterAssetLow':
        this.setState({filterAssetLow: value})
        break;
      default:
        break;
    }
  }
  render () {
    let filteredItems = this.props.bks;
    let state = this.state;
    ["filterText", "filterUsState", "filterAssetHigh", "filterAssetLow"]
      .forEach((filterBy) => {
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
      <div className="container-fluid">
        <div className="col-lg-6">
          <form>
            <SearchBar
              filterText={this.state.filterText}
              onFilterTextInput={this.filterItems}
            />
          </form>
        </div>
        <div className="col-lg-4">
          <ButtonToolbar>
            <UsStateButton
              bks={this.state.bks}
              filterUsState={this.state.filterUsState}
              onFilterUsState={this.filterItems}
            />
          <AssetButton
            valueArray={[0, 500, 1000, 5000]}
            title="Asset High"
            bsStyle="default"
            id="asset-high-button"
            gtOrlt="&lt;"
          />
          <AssetButton
            valueArray={[0, 500, 1000, 5000]}
            title="Asset Low"
            bsStyle="default"
            id="asset-low-button"
            gtOrlt="&gt;"
          />
          </ButtonToolbar>
        </div>
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

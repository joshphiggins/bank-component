import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UsStateSelect from './StateForm';
import AssetSelect from './AssetSelect';
import BankTable from './BankTable';
import SearchBar from './SearchBar';
import { Form, FormGroup } from 'react-bootstrap';

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
      let filterByKey = {filterText: 'name', filterUsState: 'state',
                        filterAssetHigh: 'asset', filterAssetLow: 'asset'}
      let filterObj = filterByKey[filterBy];
      if(filterValue){
        filteredItems = filteredItems.filter((item) => {
          if(filterBy === "filterText"){
            return item[filterObj].toLowerCase().search(
              filterValue.toLowerCase()) !== -1;
          }
          if(filterBy === "filterAssetHigh"){
            let convertItem = this.state.filterAssetHigh * 1000;
            return item[filterObj] <= convertItem
          }
          if(filterBy === "filterAssetLow"){
            let convertItem = this.state.filterAssetLow * 1000;
            return item[filterObj] >= convertItem
          }
          else {
            return item[filterObj] === filterValue;
          }
        });
      }
    });

    return (
      <div className="container-fluid">
        <div className="col-lg-6">
          <Form inline>
            <FormGroup controlId="formBankSearch">
              <SearchBar
                filterText={this.state.filterText}
                onFilterTextInput={this.filterItems}
              />
            </FormGroup>
            {' '}
            <UsStateSelect
              bks={this.state.bks}
              filterUsState={this.state.filterUsState}
              onFilterUsState={this.filterItems}
            />
            {' '}
            <AssetSelect
              controlId="formAssetLow"
              valueArray={[0, 500, 1000, 5000]}
              label="Asset Low"
              gtOrlt="&gt;"
              onFilterAsset={this.filterItems}
              filterState="filterAssetLow"
            />
            {' '}
            <AssetSelect
              controlId="formAssetHigh"
              valueArray={[0, 500, 1000, 5000]}
              label="Asset High"
              gtOrlt="&lt;"
              onFilterAsset={this.filterItems}
              filterState="filterAssetHigh"
            />
          </Form>
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

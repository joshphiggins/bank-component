import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UsStateSelect from './StateForm';
import AssetSelect from './AssetSelect';
import BankTable from './BankTable';
import SearchBar from './SearchBar';
import { Grid, Col, Form, Button, FormGroup } from 'react-bootstrap';

class FilterableBankTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterKeys: {
        filterText: '',
        filterUsState: '',
        filterAssetHigh: '',
        filterAssetLow: ''
      },
      bks: this.props.bks,

    };
    this.updateFilterText = this.updateFilterText.bind(this);
    this.updateFilterUsState = this.updateFilterUsState.bind(this);
    this.updateAssetHigh = this.updateAssetHigh.bind(this);
    this.updateAssetLow = this.updateAssetLow.bind(this);
    this.clearFilters = this.clearFilters.bind(this);

  };
  updateFilterText(value) {
    const filterKeys = {...this.state.filterKeys}
    filterKeys['filterText'] = value;
    this.setState({ filterKeys });
    }
  updateFilterUsState(value){
    const filterKeys = {...this.state.filterKeys}
    filterKeys['filterUsState'] = value;
    this.setState({ filterKeys });
  }
  updateAssetHigh(value){
    const filterKeys = {...this.state.filterKeys}
    filterKeys['filterAssetHigh'] = value
    this.setState({ filterKeys });
  }
  updateAssetLow(value){
    const filterKeys = {...this.state.filterKeys}
    filterKeys['filterAssetLow'] = value
    this.setState({ filterKeys });
  }
  clearFilters () {
    const filterKeys = {...this.state.filterKeys}
    filterKeys['filterText'] = ""
    filterKeys['filterUsState'] = ""
    filterKeys['filterAssetHigh'] = ""
    filterKeys['filterAssetLow'] = ""
    this.setState({ filterKeys });
  }
  render () {
    let filteredItems = this.props.bks;
    let filterKeys = this.state.filterKeys;
    let filterKeyArray = Object.keys(this.state.filterKeys)
    filterKeyArray.forEach((filterBy) => {
      let filterValue = filterKeys[filterBy];
      let filterByKey = {filterText: 'name', filterUsState: 'state',
                        filterAssetHigh: 'asset', filterAssetLow: 'asset'}
      let filterObj = filterByKey[filterBy];
      if(filterValue){
        filteredItems = filteredItems.filter((item) => {
          if(filterBy === "filterText"){
            return item[filterObj].toLowerCase().indexOf(
              filterValue.toLowerCase()) !== -1;
          }
          if(filterBy === "filterAssetHigh"){
            let convertItem = filterValue * 1000;
            return item[filterObj] <= convertItem
          }
          if(filterBy === "filterAssetLow"){
            let convertItem = filterValue * 1000;
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
        <Grid>
          <Col lg={12} >
          <Form inline>
            <FormGroup controlId="formBankSearch">
              <SearchBar
                filterText={this.state.filterKeys['filterText']}
                onFilterTextInput={this.updateFilterText}
              />
            </FormGroup>
            {' '}
            <UsStateSelect
              bks={this.props.bks}
              filterUsState={this.state.filterKeys['filterUsState']}
              onFilterUsState={this.updateFilterUsState}
            />
            {' '}
            <AssetSelect
              controlId="formAssetLow"
              valueArray={[0, 500, 1000, 5000]}
              label="Asset Low"
              gtOrlt="&gt;"
              onFilterAsset={this.updateAssetLow}
              filterState="filterAssetLow"
              value={this.state.filterKeys['filterAssetLow']}
            />
            {' '}
            <AssetSelect
              controlId="formAssetHigh"
              valueArray={[0, 500, 1000, 5000]}
              label="Asset High"
              gtOrlt="&lt;"
              onFilterAsset={this.updateAssetHigh}
              filterState="filterAssetHigh"
              value={this.state.filterKeys['filterAssetHigh']}
            />
            {' '}
            <FormGroup>
              <Button onClick={this.clearFilters}>
                Clear Filters
              </Button>
            </FormGroup>
          </Form>
        </Col>
        </Grid>
        <BankTable
        bks={filteredItems}
        />
    </div>
    );
  }
}

FilterableBankTable.propTypes = {
  filterText: PropTypes.string
}

export default FilterableBankTable;

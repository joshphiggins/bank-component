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
      filterText: '',
      filterUsState: '',
      filterAssetHigh: '',
      filterAssetLow: '',
      bks: this.props.bks,
      filteredItems: this.props.bks
    };
    this.updateFilterText = this.updateFilterText.bind(this);
    this.updateFilterUsState = this.updateFilterUsState.bind(this);
    this.updateAssetHigh = this.updateAssetHigh.bind(this);
    this.updateAssetLow = this.updateAssetLow.bind(this);
    this.clearFilters = this.clearFilters.bind(this);

  };
  updateFilterText(value) {
    const bks = this.props.bks;
    console.log(bks)
    const filteredBks = bks.filter(
      (item) => item['name'].toLowerCase().search(
              value.toLowerCase()) !== -1)
    this.setState({
      filterText: value,
      filteredItems: filteredBks
      });
    }
  updateFilterUsState(value){
    const bks = this.props.bks;
    const filteredBks = bks.filter(
      (item) => item['state'] === value)
    this.setState({
      filterUsState: value,
      filteredItems: filteredBks
    })
  }
  updateAssetHigh(value){
    const bks = this.props.bks;
    let assetThousand = value * 1000;
    const filteredBks = bks.filter(
      (item) => item['asset'] <= assetThousand);
    this.setState({
      filterAssetHigh: value,
      filteredItems: filteredBks
    })
  }
  updateAssetLow(value){
    const bks = this.props.bks;
    let assetThousand = value * 1000;
    const filteredBks = bks.filter(
      (item) => item['asset'] <= assetThousand);
    this.setState({
      filterAssetLow: value,
      filteredItems: filteredBks
    })
  }
  clearFilters () {
    this.setState({
      filterText: '',
      filterUsState: '',
      filterAssetHigh: '',
      filterAssetLow: ''
    })
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
        <Grid>
          <Col lg={12} >
          <Form inline>
            <FormGroup controlId="formBankSearch">
              <SearchBar
                filterText={this.state.filterText}
                onFilterTextInput={this.updateFilterText}
              />
            </FormGroup>
            {' '}
            <UsStateSelect
              bks={this.props.bks}
              filterUsState={this.state.filterUsState}
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
            />
            {' '}
            <AssetSelect
              controlId="formAssetHigh"
              valueArray={[0, 500, 1000, 5000]}
              label="Asset High"
              gtOrlt="&lt;"
              onFilterAsset={this.updateAssetHigh}
              filterState="filterAssetHigh"
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
        /*bks={this.state.filteredItems}*/
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

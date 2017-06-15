import React, { Component } from 'react';
import PropTypes from 'prop-types';

const BANKS = require('../data/bank-search.js');

class BankRow extends Component {
  render () {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.holding_co}</td>
        <td>{this.props.date}</td>
        <td>{this.props.city}</td>
        <td>{this.props.state}</td>
        <td>{this.props.msa}</td>
        <td>{this.props.region}</td>
        <td>{this.props.asset}</td>
        <td>{this.props.offices}</td>
      </tr>
    );
  }
}

class BankTable extends Component {
  render() {
    const rows = [];
    //let lastBank = null;
    this.props.bks.forEach((bank) => {
      console.log(Object.keys(bank).map((key)=> { return bank[key]; }))
      //console.log(bank);
      //console.log(bank.city.includes(this.props.filterText));
      if (
        bank.city.toLowerCase().indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(
        <BankRow
        key={bank.rssd}
        name={bank.name}
        holding_co={bank.holding_co}
        date={bank.date}
        city={bank.city}
        state={bank.state}
        msa={bank.msa}
        asset={bank.asset}
        region={bank.region}
        offices={bank.offices}
        />
      )
    });
    return (
      <table>
        <colgroup span="4"></colgroup>
        <tr>
          <th>Name</th>
          <th>Holding Company</th>
          <th>Date</th>
          <th>City (Headquarters)</th>
          <th>State</th>
          <th>MSA</th>
          <th>Region</th>
          <th>Total Assets</th>
          <th>No. of Offices</th>
        </tr>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e){
    this.props.onFilterTextInput(e.target.value);
  }

  render () {
    return (
      <form>
        <input
        type="text"
        placeholder="Search..."
        value={this.props.filterText}
        onChange={this.handleFilterTextInputChange}
        />
      </form>
    )
  }
}

class FilterableBankTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  };
  handleFilterTextInput(filterText){
    this.setState({
      filterText: filterText
    });
  }

  render () {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <BankTable
        bks={BANKS.bks}
        filterText={this.state.filterText}
        />
      </div>
    );
  }
}

FilterableBankTable.propTypes = {
  filterText: PropTypes.string
}

export default FilterableBankTable;

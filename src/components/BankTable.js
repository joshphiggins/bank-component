import React, { Component } from 'react';


function BankRow ({ name, holding_co, date, city,
            state, msa, region, asset, offices }) {
  return (
    <tr className="BankTable-tr">
      <td className="BankTable-td">{name}</td>
      <td className="BankTable-td">
        <p>Date: {date}</p>
        <p>Holding Co.: {holding_co}</p>
        <p>Assets: {asset}</p>
        <p>Offices: {offices}</p>
      </td>
      <td className="BankTable-td">
        <p>City: {city}</p>
        <p>State: {state}</p>
        <p>MSA: {msa}</p>
        <p>Region: {region}</p>
      </td>
    </tr>
  );
}

class BankTable extends Component {
  constructor(props){
    super(props);
    this.filterItem = this.filterItem.bind(this);
  }
  filterItem (item, search) {
    item.filter(
      (item) => {
        return item.toLowerCase().indexOf(
        search.toLowerCase()) !== -1;
    })
  };
  render() {
    const rows = [];
    this.props.bks.forEach((bank) => {
      /* if (
        (bank.name.toLowerCase().indexOf(this.props.filterText) === -1 ||
        (!bank.state && this.props.filterUsState))) {
        return;
      } */
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
      <div className="container-fluid">
        <table className="table table-striped">
          <thead className="thead-default">
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody className="BankTable-tbody">{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default BankTable;
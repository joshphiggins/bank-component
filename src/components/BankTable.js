import React, { Component } from 'react';



function BankRow ({ name, holding_co, date, city,
            state, msa, region, asset, offices }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{holding_co}</td>
      <td>{date}</td>
      <td>{city}</td>
      <td>{state}</td>
      <td>{msa}</td>
      <td>{region}</td>
      <td>{asset}</td>
      <td>{offices}</td>
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

export default BankTable;
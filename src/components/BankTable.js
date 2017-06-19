import React, { Component } from 'react';
import moment from 'moment';
import { Table } from 'react-bootstrap';
import { formatDollars } from '../helpers';


function BankRow ({ name, holding_co, date, city,
            state, msa, region, asset, offices }) {
  return (
    <tr>
      <td>
        <p>{name}</p>
      </td>
      <td>
        <p>{holding_co}</p>
      </td>
      <td>
        <p>{moment(date).format('M/D/YYYY')}</p>
      </td>
      <td>
        <p>{formatDollars(asset)}</p>
      </td>
      <td>
        <p>{offices}</p>
      </td>
      <td>
        <p>{city}, {state}</p>
      </td>
      <td>
        <p>{msa}</p>
      </td>
      <td>
        <p>{region}</p>
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
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Holding Co</th>
              <th>Date</th>
              <th>Assets</th>
              <th>Offices</th>
              <th>Headquarters</th>
              <th>MSA</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    );
  }
}

export default BankTable;
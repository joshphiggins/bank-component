import React, { Component } from 'react';
// import FilterableBankTable from './components/BankSearch';
import FilterForm from './components/test';
//import BankSelect from './components/BankSelect';
import logo from './logo.svg';
import './App.css';

var filterData = [
  { name: 'Aang', bender: 'yes', nation: 'Air', person: 'yes', show: 'ATLA' },
  { name: 'Appa', bender: 'yes', nation: 'Air', person: 'no', show: 'ATLA' },
  { name: 'Asami', bender: 'no', nation: 'Republic City', person: 'yes', show: 'LOK' },
  { name: 'Azula', bender: 'yes', nation: 'Fire', person: 'yes', show: 'ATLA' },
  { name: 'Bolin', bender: 'yes', nation: 'Earth', person: 'yes', show: 'LOK' },
  { name: 'Katara', bender: 'yes', nation: 'Water', person: 'yes', show: 'ATLA' },
  { name: 'Korra', bender: 'yes', nation: 'Water', person: 'yes', show: 'LOK' },
  { name: 'Jinora', bender: 'yes', nation: 'Air', person: 'yes', show: 'LOK' },
  { name: 'Lin Beifong', bender: 'yes', nation: 'Republic City', person: 'yes', show: 'LOK' },
  { name: 'Pabu', bender: 'no', nation: 'Fire', person: 'no', show: 'LOK' },
  { name: 'Momo', bender: 'no', nation: 'Air',  person: 'no', show: 'ATLA'},
  { name: 'Mai', bender: 'no', nation: 'Fire', person: 'yes', show: 'ATLA' },
  { name: 'Mako', bender: 'yes', nation: 'Fire', person: 'yes', show: 'LOK' },
  { name: 'Naga', bender: 'no', nation: 'Water', person: 'no', show: 'LOK'},
  { name: 'Sokka', bender: 'no', nation: 'Water', person: 'yes', show: 'ATLA' },
  { name: 'Suki', bender: 'no', nation: 'Earth', person: 'yes', show: 'ATLA' },
  { name: 'Tenzin', bender: 'yes', nation: 'Air', person: 'yes', show: 'LOK' },
  { name: 'Toph Beifong', bender: 'yes', nation: 'Earth', person: 'yes', show: 'ATLA' },
  { name: 'Ty Lee', bender: 'no', nation: 'Fire', person: 'yes', show: 'ATLA' },
  { name: 'Uncle Iroh', bender: 'yes', nation: 'Fire', person: 'yes', show: 'ATLA' },
  { name: 'Varrick', bender: 'no', nation: 'Republic City', person: 'yes', show: 'LOK' },
  { name: 'Zhu Li', bender: 'no', nation: 'Republic City', person: 'yes', show: 'LOK' },
  { name: 'Zuko', bender: 'yes', nation: 'Fire', person: 'yes', show: 'ATLA' }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div id="static-container">

          <FilterForm data={filterData} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types';

const STATES = require('../data/states');
console.log(STATES)

function logChange(val) {
    console.log("Selected: " + val);
  }

class BankSelect extends Component{
  constructor (props) {
    super(props);
    this.state = {
      name: props.name,
      value: props.value,
      options: props.options,
      onChange: props.logChange,
      selectValue: props.selectValue,
      clearable: true
    }
  }
  componentDidMount () {
    updateValue (newValue) {
      this.setState( function () {
        return {
          selectValue: newValue
        };
      });
    }.bind(this)
  }


  render() {
    return (
      <div className="App-bank-select">
        <h2 className="bank-select-heading">{this.props.label}</h2>
          <Select
            autofocus
            simpleValue
            clearable={this.state.clearable}
            disabled={this.state.disabled}
            value={this.state.selectValue}
            onChange={this.updateValue}
            searchable={this.state.searchable}
            name= {this.state.name}
            options={this.state.options}
          />
      </div>
    )
  }
}

BankSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  //options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

BankSelect.defaultProps = {
   name: 'form-bank-select',
   label: 'Select a Bank',
   value: "",
   options: STATES.US,
   selectValue: null,
   onChange: logChange
 }

export default BankSelect;
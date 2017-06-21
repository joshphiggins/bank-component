import React, { Component } from 'react';
import { ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

function UsStateOptions ({ usState }){
  return (
    <option value={usState}>{usState}</option>
  )
}

class UsStateSelect extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    let value = event.target.value
    let none = value === 'None';
    let filterValue = none ? "" : value
    this.props.onFilterUsState(filterValue)

  }
  render () {
    let usStateArray = this.props.bks.map((a) => a.state)
    let uniqueUsStates = Array.from(new Set(usStateArray))
    uniqueUsStates.sort()
    uniqueUsStates.unshift("None")
    let usStateRows = [];
    uniqueUsStates.forEach((usState) => {
      usStateRows.push(
        <UsStateOptions
          key={usState}
          usState={usState}
        />)
    });
    return (
          <FormGroup controlId="formStateSelect">
            <ControlLabel>State</ControlLabel>
            {' '}
            <FormControl componentClass="select"
              placeholder="select" onChange={this.handleChange}
              value={this.props.filterUsState}>
                { usStateRows }
            </FormControl>
          </FormGroup>

    );
  }
}

export default UsStateSelect;
import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

function UsStateOptions ({ usState, onSelect }){
  return (
    <MenuItem eventKey={ usState } onSelect={onSelect}>{ usState }</MenuItem>
  )
}

class UsStateButton extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      usStateTitle: 'Filter By State'
    }
  }

  handleChange(event){
    let none = event === 'None';
    let filterBy = none ? "Filter By State" : `Filtered by ${event}`
    let value = none ? "" : event
    this.props.onFilterUsState(value, "filterUsState");
    this.setState({usStateTitle: filterBy})

  }
  render () {
    let usStateArray = this.props.bks.map((a) => {return a.state})
    let uniqueUsStates = Array.from(new Set(usStateArray))
    uniqueUsStates.sort()
    uniqueUsStates.unshift("None")
    let usStateRows = [];
    uniqueUsStates.forEach((usState) => {
      usStateRows.push(<UsStateOptions
        key={usState} eventKey={usState}
        usState={usState} onSelect={this.handleChange}
        />)
    });
    return (
          <DropdownButton
            title={this.state.usStateTitle}
            bsStyle="default"
            id="dropdown-state"
            >
            {usStateRows}
          </DropdownButton>

    );
  }
}

export default UsStateButton;
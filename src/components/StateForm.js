import React, { Component } from 'react';
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';

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
    this.props.onFilterUsState(value, "filterUsState");
    let value = none ? "" : event
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
        <ButtonToolbar>
          <DropdownButton
            title={this.state.usStateTitle}
            bsStyle="default"
            id="dropdown-state"
            >
            {usStateRows}
          </DropdownButton>
          <DropdownButton title="Asset High" bsStyle="default" id="dropdown-asset-high">
              <MenuItem eventKey="0">&lt; $0 </MenuItem>
              <MenuItem eventKey="500">&lt; $500M</MenuItem>
              <MenuItem eventKey="1000">&lt; $1,000M</MenuItem>
              <MenuItem eventKey="5000">&lt; $5,000M</MenuItem>
          </DropdownButton>
          <DropdownButton title="Asset Low" bsStyle="default" id="dropdown-asset-low">
              <MenuItem eventKey="0"> &gt; $0 </MenuItem>
              <MenuItem eventKey="500"> &gt; $500M</MenuItem>
              <MenuItem eventKey="1000"> &gt; $1,000M</MenuItem>
              <MenuItem eventKey="5000"> &gt; $5,000M</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
    );
  }
}

export default UsStateButton;
import React, { Component } from 'react';

function UsStateOptions ({ usState }){
  return (
    <option value={ usState }>{ usState }</option>
  )
}

class UsStateForm extends Component{
  constructor(props){
    super(props);
    this.handleSubmit= this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event){
    alert('Select state: ' + this.state.value)
    event.preventDefault();
  }
  handleChange(event){
    this.props.onFilterUsState(event.target.value, "filterUsState");
  }
  render () {
    let usStateArray = this.props.bks.map((a) => {return a.state})
    let uniqueUsStates = Array.from(new Set(usStateArray))
    uniqueUsStates.sort()
    uniqueUsStates.unshift("")
    let usStateRows = [];
    uniqueUsStates.forEach((usState) => {
      usStateRows.push(<UsStateOptions key={usState} usState={usState} />)
    });
    return (
        <label>
          Filter banks by State:
          <select
            className="custom-select"
            value={this.props.filterUsState}
            onChange={this.handleChange}>
            {usStateRows}
          </select>
        </label>
    );
  }
}

export default UsStateForm;
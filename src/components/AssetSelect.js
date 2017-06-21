import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { formatDollarsRounded } from '../helpers';

function AssetOptions ({gtOrlt, value}){
  const parseBool = Number.isInteger(value)
  const parseValue = parseBool ? gtOrlt + ' ' +
   formatDollarsRounded(value) + 'M' : value
  return(
    <option value={value}>{parseValue}</option>
  )
}

class AssetSelect extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    let value = event.target.value
    let none = value === 'None';
    let filterValue = none ? "" : value
    this.props.onFilterAsset(filterValue)
  }

  render () {
  const {valueArray} = this.props
  valueArray.unshift("None")
    return (
      <FormGroup controlId={this.props.controlId}>
        <ControlLabel>{this.props.label}</ControlLabel>
        {' '}
        <FormControl componentClass="select"
          placeholder="select" onChange={this.handleChange} value={this.props.value}>
            {valueArray.map((item, index) =>
              <AssetOptions
                key={index}
                gtOrlt={this.props.gtOrlt}
                value={item}
              />
            )}
        </FormControl>
      </FormGroup>
    )
  }
}

export default AssetSelect;
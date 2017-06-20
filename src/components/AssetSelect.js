import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { formatDollarsRounded } from '../helpers';

function AssetOptions ({gtOrlt, value}){
  const parseBool = Number.isInteger(value)
  const parseValue = parseBool ? formatDollarsRounded(value) : value
  return(
    /*<MenuItem key={key} eventKey={key}
    onSelect={onSelect}>{gtOrlt} {formatDollarsRounded(value)}M</MenuItem>*/
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
    this.props.onFilterAsset(filterValue, this.props.filterState)
  }

  render () {
  const {valueArray} = this.props
  // const updateValueArray = valueArray.map((item) => {return formatDollarsRounded(item);})
  valueArray.unshift("None")
    return (
      <FormGroup controlId={this.props.controlId}>
        <ControlLabel>{this.props.label}</ControlLabel>
        {' '}
        <FormControl componentClass="select"
          placeholder="select" onChange={this.handleChange}>
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
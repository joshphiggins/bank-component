import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { formatDollarsRounded } from '../helpers';

function MenuItemFunc ({gtOrlt, key, value}){
  return(
    <MenuItem eventKey={key}>{gtOrlt} {formatDollarsRounded(value)}M</MenuItem>
  )
}

function AssetButton ({valueArray, title, bsStyle, id, gtOrlt}){
  return (
    <DropdownButton title={title} bsStyle={bsStyle} id={id}>
      {valueArray
        .map(i =>
          <MenuItemFunc
          key={i}
          gtOrlt={gtOrlt}
          value={i}
          //onSelect={}
          />)}
    </DropdownButton>
  )
}

export default AssetButton;
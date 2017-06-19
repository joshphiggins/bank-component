import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

function AssetButton (valueArray, title, style, id,){
  return (
    <DropdownButton title="Asset High" bsStyle="default" id="dropdown-asset-high">
      <MenuItem eventKey="0">&lt; $0 </MenuItem>
      <MenuItem eventKey="500">&lt; $500M</MenuItem>
      <MenuItem eventKey="1000">&lt; $1,000M</MenuItem>
      <MenuItem eventKey="5000">&lt; $5,000M</MenuItem>
    </DropdownButton>
  )
}

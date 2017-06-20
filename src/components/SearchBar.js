import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handelChange = this.handelChange.bind(this);
  }

  handelChange(e){
    this.props.onFilterTextInput(e.target.value, "filterText");
  }

  render () {
    return (
        <FormGroup controlId="formSearch">
          <ControlLabel>Bank Name</ControlLabel>
            {' '}
            <FormControl
              type="text"
              className="form-control"
              placeholder="Search..."
              value={this.props.filterText}
              onChange={this.handelChange}
            />
        </FormGroup>
    )
  }
}

export default SearchBar;
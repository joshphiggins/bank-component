import React, { Component } from 'react';


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
        <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={this.props.filterText}
        onChange={this.handelChange}
        />
    )
  }
}

export default SearchBar;
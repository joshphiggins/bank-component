import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handelChange = this.handelChange.bind(this);
  }

  handelChange(e){
    this.props.onFilterTextInput(e.target.value);
  }

  render () {
    return (
      <form>
        <input
        type="text"
        placeholder="Search..."
        value={this.props.filterText}
        onChange={this.handelChange}
        />
      </form>
    )
  }
}

export default SearchBar;
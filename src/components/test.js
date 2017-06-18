import React from 'react';


var FilterForm = React.createClass({
  getInitialState: function() {
    return {
      data: this.props.data,
      bender: '',
      nation: '',
      person: '',
      show: ''
    }
  },
  filterItems: function(val, type) {
     switch (type) {

      case 'bender':
        this.setState({bender: val});
        break;
      case 'nation':
        this.setState({nation: val});
        break;
      case 'person':
        this.setState({person: val});
        break;
      case 'show':
        this.setState({show: val});
        break;
      default:
        break;
    }
  },
  render: function() {
    var filteredItems = this.props.data;
    var state = this.state;
    console.log('filteredItems', filteredItems);
    console.log('state', state);
    ["bender", "nation", "person", "show"].forEach(function(filterBy) {
      var filterValue = state[filterBy];
      if (filterValue) {
        console.log('filtervalue', filterValue);
        filteredItems = filteredItems.filter(function(item) {
          console.log('item', item[filterBy])
          return item[filterBy] === filterValue; // return === || indexOf
        });
        console.log(filteredItems);
      }
    });
    var benderArray = this.props.data.map(function(item) { return item.bender });
    var nationArray = this.props.data.map(function(item) { return item.nation });
    var personArray = this.props.data.map(function(item) { return item.person });
    var showArray = this.props.data.map(function(item) { return item.show });
    let unqiueBender = Array.from(new Set(benderArray))
    let unqiueNation = Array.from(new Set(nationArray))
    let unqiuePerson = Array.from(new Set(personArray))
    let unqiueShow = Array.from(new Set(showArray))
    unqiueBender.unshift("");
    unqiueNation.unshift("");
    unqiuePerson.unshift("");
    unqiueShow.unshift("");
    return (
      <div className="container">
        <FilterOptions
            data={this.state.data}
            benderOptions={unqiueBender}
            nationOptions={unqiueNation}
            personOptions={unqiuePerson}
            showOptions={unqiueShow}
            changeOption={this.filterItems} />
        <div className="filter-form">
          <FilterItems data={filteredItems} />
        </div>
      </div>
    )
  }
});
var FilterOptions = React.createClass({
  changeOption: function(type, e) {
    var val = e.target.value;
    this.props.changeOption(val, type);
  },
  render: function() {
    return (
      <div className="filter-options">
        <div className="filter-option">
          <label>Bender</label>
          <select id="bender" value={this.props.bender} onChange={this.changeOption.bind(this, 'bender')}>
          {this.props.benderOptions.map(function(option) {
            return ( <option key={option} value={option}>{option}</option> )
          })}
          </select>
          <label>Nation</label>
          <select id="nation" value={this.props.nation} onChange={this.changeOption.bind(this, 'nation')}>
          {this.props.nationOptions.map(function(option) {
            return ( <option key={option} value={option}>{option}</option> )
          })}
          </select>
          <label>Person</label>
          <select id="person" value={this.props.person} onChange={this.changeOption.bind(this, 'person')}>
          {this.props.personOptions.map(function(option) {
            return ( <option key={option} value={option}>{option}</option> )
          })}
          </select>
          <label>Show</label>
          <select id="show" value={this.props.show} onChange={this.changeOption.bind(this, 'show')}>
          {this.props.showOptions.map(function(option) {
            return ( <option key={option} value={option}>{option}</option> )
          })}
          </select>
        </div>
      </div>
    );
  }
});
var FilterItems = React.createClass({
  render: function() {
    return (
      <div className="filter-items">
      {this.props.data.map(function(item){
        return (
          <div className="filter-item">{item.name}</div>
        );
      })}
      </div>
    );
  }
});

export default FilterForm;
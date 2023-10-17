import React, { Component } from 'react';
import { nanoid } from 'nanoid';
export class Filter extends Component {
  filterInputId = nanoid();

  handleChange = event => {
    this.props.onFilterChange(event.target.value);
  };

  render() {
    return (
      <label htmlFor={this.filterInputId}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          onChange={this.handleChange}
          id={this.filterInputId}
          autoComplete="off"
          required
        />
      </label>
    );
  }
}

export default Filter;

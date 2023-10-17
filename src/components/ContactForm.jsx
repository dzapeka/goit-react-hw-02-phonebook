import React, { Component } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
            autoComplete="off"
            required
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            id={this.numberInputId}
            autoComplete="off"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;

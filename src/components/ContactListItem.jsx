import React, { Component } from 'react';

export class ContactListItem extends Component {
  render() {
    const { id, name, number, onDeleteContact } = this.props;
    return (
      <>
        <li>
          {name}: {number}
          <button
            className="delete-contact-btn"
            onClick={() => onDeleteContact(id)}
            type="button"
          >
            Delete
          </button>
        </li>
      </>
    );
  }
}

export default ContactListItem;

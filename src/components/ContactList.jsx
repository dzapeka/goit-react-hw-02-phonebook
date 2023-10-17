import React, { Component } from 'react';
import ContactListItem from './ContactListItem';

export class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ul>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            onDeleteContact={onDeleteContact}
            {...contact}
          />
        ))}
      </ul>
    );
  }
}

export default ContactList;

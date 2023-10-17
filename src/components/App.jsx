import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }

  deleteContactById = id => {
    console.log(`Delete contact: ${id}`);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onContactFormSubmit = ({ name, number }) => {
    const isExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState({
      contacts: [...this.state.contacts, { name, number, id: nanoid() }],
    });

    console.log(this.state.contacts);
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm
            onSubmit={contact => this.onContactFormSubmit(contact)}
          />

          <h2>Contacts</h2>
          <Filter />
          <ContactList
            contacts={contacts}
            onDeleteContact={this.deleteContactById}
          />
        </div>
      </>
    );
  }
}

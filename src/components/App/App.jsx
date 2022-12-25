import React, { Component } from 'react';
import { Container } from './App.styled';
import { nanoid } from 'nanoid'
import { ContactAddForm } from '../ContactsAddForm/ContactAddForm'


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact]
    }))
  }

  filterChange = (event) => {
    this.setState({ filter: event.currentTarget.value })
  }

  render() {

    const { filter, contacts } = this.state

    const filterNormalized = filter.toLowerCase()
    const filtredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized))

    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <ContactAddForm onSubmit={this.addContact} />
          <h2>Contacs</h2>
          <label>Find contacts by name
            <input
              type="text"
              value={filter}
              onChange={this.filterChange}
            />
          </label>
          <ul>
            {filtredContacts.map(({ id, name, number }) => (
              <li key={id}>
                <p>{name}: {number}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>

    );
  }

};

import React, { Component } from 'react';
import { Container } from './App.styled';
import { nanoid } from 'nanoid'
import { ContactAddForm } from '../ContactsAddForm/ContactAddForm'
import { Filter } from "../Filter/Filter";
import { ContactList } from 'components/ContactList/ContactList';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  nameIncludesCheking = () => {

  }

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    const nameInArray = this.state.contacts.map(contact => (
      contact.name
    ))
    if (nameInArray.includes(contact.name)) {
      alert(`${contact.name} is already in contacts `)
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact]
      }))
    }
  }

  filterChange = (event) => {
    this.setState({ filter: event.currentTarget.value })
  }

  getFiltredContacts = () => {
    const { filter, contacts } = this.state
    const filterNormalized = filter.toLowerCase()

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized))
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render() {


    const { filter } = this.state

    const filtredContacts = this.getFiltredContacts()

    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <ContactAddForm onSubmit={this.addContact} />
          <h2>Contacs</h2>
          <Filter value={filter} onChange={this.filterChange} />
          <ContactList contacts={filtredContacts} onDeleteContact={this.deleteContact} />
        </div>
      </Container>

    );
  }

};

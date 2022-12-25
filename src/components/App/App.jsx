import React, { Component } from 'react';
import { Container } from './App.styled';
import { nanoid } from 'nanoid'


export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.addContact()
    this.reset()
  }

  reset = () => {
    this.setState({
      name: '',
      number: ''
    })
  }

  addContact = () => {
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }))
  }

  render() {

    const { contacts } = this.state
    const { name, number } = this.state

    return (
      <Container>
        <div>
          <h2>Phonebook</h2>
          <form onSubmit={this.handleSubmit}>
            <label>Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required />
            </label>
            <label>Number
              <input
                type="tel"
                name="number"
                value={number}
                onChange={this.handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required />
            </label>
            <button type='submit'>Add contact</button>
          </form>
          <div>
            <h2>Contacs</h2>
            <ul>
              {contacts.map(({ id, name, number }) => (
                <li key={id}>
                  <p>{name}: {number}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

    );
  }

};

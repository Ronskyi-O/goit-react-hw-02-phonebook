import React, { Component } from 'react';
import { Container } from './App.styled';
import { nanoid } from 'nanoid'


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  handleNameChange = (event) => {
    this.setState({ name: event.currentTarget.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.addContact()
    this.reset()
  }

  reset = () => {
    this.setState({
      name: ''
    })
  }

  addContact = () => {
    const contact = {
      id: nanoid(),
      name: this.state.name,
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }))
  }

  render() {

    const { contacts } = this.state
    const { name } = this.state

    return (
      <Container>
        <div>
          <h2>Phonebook</h2>
          <form onSubmit={this.handleSubmit}>
            <label>Name
              <input type="text"
                name="name"
                value={name}
                onChange={this.handleNameChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required />
            </label>
            <button type='submit'>Add contact</button>
          </form>
          <div>
            <h2>Contacs</h2>
            <ul>
              {contacts.map(({ id, name }) => (
                <li key={id}>
                  <p>{name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

    );
  }

};

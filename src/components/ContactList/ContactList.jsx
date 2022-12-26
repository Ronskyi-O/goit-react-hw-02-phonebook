import React from 'react';
import { ContactListItem } from '../ContactListItem/ContactListItem'
import PropTypes from 'prop-types'

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number, }) => (
                <ContactListItem key={id} id={id} name={name} number={number} onDeleteContact={onDeleteContact} />
            ))}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}
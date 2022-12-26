import React from 'react';
import { ContactListItem } from '../ContactListItem/ContactListItem'

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number, }) => (
                <ContactListItem key={id} id={id} name={name} number={number} onDeleteContact={onDeleteContact} />
            ))}
        </ul>
    )
}
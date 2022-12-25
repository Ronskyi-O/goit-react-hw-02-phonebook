import React from 'react';
import { ContactListItem } from '../ContactListItem/ContactListItem'

export const ContactList = ({ contacts }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <ContactListItem key={id} name={name} number={number} />
            ))}
        </ul>
    )
}
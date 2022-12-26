import React from "react";

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
    return (
        <li>
            <p>{name}: {number}</p>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
    )
}
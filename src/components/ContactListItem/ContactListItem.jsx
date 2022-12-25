import React from "react";

export const ContactListItem = ({ name, number }) => {
    return (
        <li>
            <p>{name}: {number}</p>
        </li>
    )
}
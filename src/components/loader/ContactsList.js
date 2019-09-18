import React from 'react';

 const ContactList = ({ contacts }) => {
  return (
    <div className="card-content">
      <ul className="center">
        {contacts.map(contact => (
          <li key={contact.email}>
            <img
              src={contact.photo}
              width="100px"
              height="100px"
              alt="presentation"
            />
            <div className="card-content">
              <span className="card-title">{contact.name}</span>
              <small>{contact.email}</small> <br />
              <small> {contact.phone}</small>
            </div>
            {console.log(contact)}
          </li>
        ))}
      </ul>
    </div>
  );
 };
export default ContactList;
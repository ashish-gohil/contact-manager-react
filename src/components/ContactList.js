import React from "react";
import ContactCard from "./ContactCard";
const ContactList = ({ contacts, setContacts }) => {
  const deleteContact = (thisContact) => {
    setContacts(contacts.filter((contact) => contact.id !== thisContact.id));
  };
  return (
    <div className="ui celled list">
      {contacts.map((contact) => {
        return <ContactCard contact={contact} deleteContact={deleteContact} />;
      })}
    </div>
  );
};

export default ContactList;

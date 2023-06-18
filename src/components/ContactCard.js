import React from "react";
import user from "../images//user-icon.png";

const ContactCard = ({ contact, deleteContact }) => {
  return (
    <div className="item" key={contact.id}>
      <img class="ui avatar image" src={user} />
      <div class="content">
        <div class="header">{contact.name}</div>
        <div class="description">{contact.email}</div>
      </div>
      <div class="right floated horizontal list">
        <i
          className="trash alternate large icon middle aligned"
          style={{ color: "red", marginTop: "-3px" }}
          onClick={() => {
            deleteContact(contact);
          }}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;

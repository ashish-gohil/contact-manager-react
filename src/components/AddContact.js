import React from "react";
import { v4 as uuid } from "uuid";

const AddContact = ({ setContact }) => {
  const contact = {};
  const addContact = (e) => {
    e.preventDefault();
    if (!e.target.name.value || !e.target.email.value) {
      alert("All fields are mandatory");
    } else {
      setContact(contact);
      contact.id = uuid();
    }
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.name.blur();
    e.target.email.blur();
  };
  const setName = (e) => {
    contact.name = e.target.value;
  };
  const setEmail = (e) => {
    contact.email = e.target.value;
  };
  return (
    <form class="ui form" onSubmit={addContact}>
      <div class="field">
        <label>Name</label>
        <input type="text" name="name" placeholder="Name" onChange={setName} />
      </div>
      <div class="field">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={setEmail}
        />
      </div>
      <button type="submit" className="ui blue button">
        Add
      </button>
    </form>
  );
};

export default AddContact;

import { useEffect, useState } from "react";
import AddContact from "./AddContact";
import Header from "./Header";
import ContactList from "./ContactList";
function App() {
  const CONTACT_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(CONTACT_KEY)) || [];
    if (retriveContacts.length) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(CONTACT_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const setContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className="ui container">
      <Header />
      <AddContact setContact={setContact} />
      <ContactList contacts={contacts} setContacts={setContacts} />
    </div>
  );
}

export default App;

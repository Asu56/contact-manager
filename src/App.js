import React, { useState } from "react";
import Contact from "./components/Contact";
import ContactAdder from "./components/ContactAdder";
import NavBar from "./components/NavBar";

import "./styles/app.css";

const App = () => {

  const getContacts = JSON.parse(localStorage.getItem("contacts"));

  const [contacts, setContacts] = useState(getContacts ? getContacts : []);
  const addContactData = (contactData) => {

    const allContacts = [contactData, ...contacts];
    setContacts(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
    // console.log(contacts)
    // console.log(contactData);
  };

  const deleteFunction = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };


  return (
    <>
      <NavBar />
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>
      <div className="contact_list">
        <h3>Contact Lists</h3>

        {contacts.map((data) => (
          <Contact key={data.id} data={data} onContactDeleted={deleteFunction}></Contact>
        ))}


      </div>
    </>
  );
}

export default App;
//small letter html components 
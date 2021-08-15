import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts,addContact}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate){
      let newContact = {name: name, phone: phone, email: email}
      addContact(newContact)
      setName("");
      setPhone("");
      setEmail("");
    }

  };

  /*
  Using useEffect hook, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    setIsDuplicate(contacts.find((contact) => contact.name === name));
  }, [name, contacts]);

  return (
    <>
      <section>
        <h2>
          Add Contact
          {isDuplicate ? " - Name Already Exists" : ""}
        </h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </>
  );
};

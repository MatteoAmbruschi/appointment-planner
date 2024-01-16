import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({handleContacts, contacts}) => {
 const [name, setName] = useState('')
 const [phone, setPhone] = useState('')
 const [email , setEmail ] = useState('')
 const [isDuplicate, setIsDuplicate] = useState(false);

  function handleNameChange(e){
    const newName = e.target.value
    setName(newName)

    const duplicate = contacts.some((contact) => contact.name === newName);
    setIsDuplicate(duplicate);
  }

  function handlePhone(e){
    const newPhone = e.target.value
    setPhone(newPhone)
  }

  function handleEmailChange(e){
    const newEmail = e.target.value
    setEmail(newEmail)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
   if (isDuplicate === false){
    handleContacts(name, phone, email)
    setName('')
    setPhone('')
    setEmail('')
   }
  };


  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
         name={name}
         phone={phone}
         email={email}
         handleNameChange={handleNameChange}
         handlePhone={handlePhone}
         handleEmailChange={handleEmailChange}
         handleSubmit={handleSubmit}
         isDuplicate={isDuplicate}
         />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};

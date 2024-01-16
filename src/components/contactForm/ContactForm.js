import React from "react";

export const ContactForm = ({
  name,
  phone,
  email,
  handleNameChange,
  handlePhone,
  handleEmailChange,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
      Name
        <input type='text' id='name' value={name} onChange={handleNameChange} required />
      Phone
        <input type='tel' value={phone} onChange={handlePhone} pattern="^[1-6][1-6]{1}(([0-9]{2}){4})|((\s[0-9]{2}){4})|((-[0-9]{2}){4})$" />
      Email
        <input type='email' value={email} onChange={handleEmailChange} />
        <input type="submit"/>
      </form>
    </>
  );
};


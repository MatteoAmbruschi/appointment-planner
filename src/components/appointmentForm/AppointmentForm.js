import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const handleChange = (e) => {
    setContact(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        Title:
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        Date:
        <input type="date" id="date"  min={getTodayString()} value={date} onChange={(e) => setDate(e.target.value)} />
        Time:
        <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} />

        <ContactPicker id="contact" name={name} value={contact} onChange={handleChange} contacts={contacts}/>

        <input type="submit"/>
      </form>
    </>
  );
};

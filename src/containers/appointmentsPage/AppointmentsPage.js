import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, handleAppointments}) => {

  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAppointments(name, contact, date, time)
    setName('')
    setContact('')
    setDate('')
    setTime('')
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm handleSubmit={handleSubmit} 
        contacts={contacts}
        name={name}
        setName={setName}
        contact={contact}
        setContact={setContact}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={appointments} />
      </section>
    </div>
  );
};
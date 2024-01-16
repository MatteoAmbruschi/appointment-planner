import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

import { useState, useEffect } from "react";

function App() {

const [contacts, setContacts] = useState([])
const [appointments, setAppointments] = useState([])

  function handleContacts(name, phone, email){
    setContacts((prev) => [...prev, {name, phone, email}])
  }

  function handleAppointments(name, contact, date, time){
    setAppointments((prev) => [...prev, {name, contact, date, time}])
  }


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to='/contacts 'replace/> }/>
      <Route path='/contacts' element={ <ContactsPage handleContacts={handleContacts} contacts={contacts} /> }/>
      <Route path='/appointments' element={ <AppointmentsPage handleAppointments={handleAppointments} appointments={appointments} contacts={contacts} /> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

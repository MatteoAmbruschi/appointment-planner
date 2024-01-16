import {  Outlet, NavLink } from "react-router-dom";

export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

function Root() {
    return (
        <>
        <h1 style={{display: 'flex', justifyContent: 'center', fontSize: 40, fontFamily: 'futura', textAlign: 'center'}}>Appointment Planner</h1>
            <nav style={{display: 'flex', justifyContent: 'center'}}>
                <NavLink to='/contacts' >
                Contacts
                </NavLink>
                <NavLink to='/appointments' >
                Appointments
                </NavLink>
            </nav>
            <Outlet/>
      </>
    );

}

export default Root;
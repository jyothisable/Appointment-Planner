import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

/*
Naming convention
contacts => list of contact objects with name, phone and email
contact => object containing name, phone and email
addContact => function to adding contact object to contacts
similarly for appointments, appointment and addAppointment
*/
function App() {

  const [contacts,setContacts] = useState([
    {name: "John", phone:"9876543210",email: "john@gmail.com"},
    {name: "John Jr", phone:"9876343210",email: "johnjr@gmail.com"},
  ])

  const [appointments, setAppointments] = useState([
    {
      title: "meeting",
      contactName: "John",
      date: "2021-12-31",
      time: "20:00",
    },
    {
      title: "party",
      contactName: "John Jr",
      date: "2021-12-31",
      time: "23:00",
    },
  ]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = contact => {
    setContacts(prev =>[contact,...prev])
  }

  const addAppointment = (appointment) => {
    setAppointments((prev) => [appointment, ...prev]);
  };


  return (
    <>
      <h1>Appointment Planner</h1>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage 
            contacts = {contacts}
            addContact = {addContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage 
            appointments = {appointments}
            addAppointment = {addAppointment}
            contacts = {contacts}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

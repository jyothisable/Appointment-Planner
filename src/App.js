import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

/*
Naming convention
contacts => list of contact objects with name, phone and email
contact => object containing name, phone and email
addContact => adding contact object to contacts
similary for appointments, appointment and addAppointment
*/
function App() {

  const [contacts,setContacts] = useState([
    {name: "John", phone:"9876543210",email: "john@gmail.com"},
    {name: "John2", phone:"9876343210",email: "joh2n@gmail.com"},
  ])

  const [appointments,setAppointments] = useState([
    {title:"meeting",contactName: "John",date: "today",time: "now"},
    {title:"party",contactName: "John2",date: "tom",time: "time1"},
  ])

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

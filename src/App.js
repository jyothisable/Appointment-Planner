import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  const [contacts,setContacts] = useState([
    {name: "John", phone:"9876543210",email: "john@gmail.com"},
    {name: "John2", phone:"9876343210",email: "joh2n@gmail.com"},
  ])

  const [appointments,setAppointments] = useState([
    {title:"meeting",contact: "John",date: "today",time: "now"},
    {title:"party",contact: "John2",date: "tom",time: "time1"},
  ])

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = contact => {
    setContacts(prev =>{
      return prev.includes(contact) 
      ? alert("contact already exists") 
      : [contact,...prev]
    })
  }

  const addAppointment = (appointment) => {
    setAppointments((prev) => {
      return prev.includes(appointment)
        ? alert("appointment already exists")
        : [appointment, ...prev];
    });
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
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

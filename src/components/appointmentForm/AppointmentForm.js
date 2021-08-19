import React from "react";

import { ContactPicker } from "../contactPicker/ContactPicker";
/*
contactName => name value from contact (contacts -> contact -> name)
contactNames => list of all contactName
*/
export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  setContactName,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [day, month, year] = new Date()
      .toLocaleDateString("en-IN")
      .split("/");
    return `${day.padStart(2, "0")}-${month.padStart(2, "0")}-${year}`;
  };

  // contactNames from contacts (contacts -> contact -> name)
  const contactNames= contacts.map(contact => contact.name);

  return (
    <form onSubmit={handleSubmit}>
      <p>Name:</p>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        placeholder="Appointment Title"
      />
      <ContactPicker
        contactNames={contactNames}
        handleChange={(e) => setContactName(e.target.value)}
      />
      <input
        type="date"
        min={getTodayString()}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};

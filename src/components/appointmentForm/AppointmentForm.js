import React from "react";

import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
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

  const getContactNames = () => contacts.map((contact) => contact.name);

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
        value={contact}
        contacts={getContactNames()}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Appointment With"
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

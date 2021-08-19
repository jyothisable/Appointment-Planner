import React from "react";

export const ContactPicker = ({handleChange, contactNames}) => {
  return (
    <select onChange={handleChange}>
      <option value={""} key={-1} selected="selected">
        Select
      </option>
      {contactNames.map((contactName) => {
        return (
          <option value={contactName}>
            {contactName}
          </option>
        );
      })}
    </select>
  );
};
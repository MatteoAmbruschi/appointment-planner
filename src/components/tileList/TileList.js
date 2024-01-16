import React from "react";
import { Tile } from '../tile/Tile'

export const TileList = ({contacts, appointments}) => {
  return (
    <div>
     
         {
         contacts ? 
         contacts.map((contact, index) => (
          <Tile key={index} name={contact.name} description={{ ...contact}} />)) 
          : appointments.map((appointment, index) => (
          <Tile key={index} name={appointment.name} description={{ ...appointment}} />))
        }
    </div>
  );
};
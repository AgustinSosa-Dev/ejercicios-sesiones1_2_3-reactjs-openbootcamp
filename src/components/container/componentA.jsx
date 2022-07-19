import React, { Component } from "react";
import { Contact } from "../../models/contact.class.js";
import ContactComponent from "../pure/componentB";

const ContactComponentA = () => {
  const defaultContact = new Contact(
    "Agustín Elías",
    "Sosa",
    "agustinsosa.dev@gmail.com",
    false
  );

  const changeState = (id) => {
    console.log("TODO: Cambiar estado de conexión.");
  };

  return (
    <div>
      <div>
        <h1>Perfil:</h1>
      </div>
      {/* TODO: Aplicar For/Map, para renderizar una lista. */}
      <ContactComponent contact={defaultContact}></ContactComponent>
    </div>
  );
};

export default ContactComponentA;

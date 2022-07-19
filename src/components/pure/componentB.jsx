import React, { Component } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComponent = ({ contact }) => {
  return (
    <div>
      <h2>Nombre: {contact.name}</h2>
      <h2>Apellido: {contact.surname}</h2>
      <h3>Email: {contact.email}</h3>
      <h4>
        Estado:
        {contact.conectado ? " Contacto En Línea" : " Contacto No Disponible"}
      </h4>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ContactComponent;

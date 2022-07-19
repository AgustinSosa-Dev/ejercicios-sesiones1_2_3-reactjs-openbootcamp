export class Contact {
  name = "";
  surname = "";
  email = "";
  conectado = false;

  constructor(name, surname, email, conectado) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.conectado = conectado;
  }
}

class User {
  constructor(firstname, lastname, email, number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.number = number;
  }
  getFristname() {
    return this.firstname;
  }

  getLastname() {
    return this.lastname;
  }

  getEmail() {
    return this.email;
  }

  getNumber() {
    return this.number;
  }
}

module.exports = User;

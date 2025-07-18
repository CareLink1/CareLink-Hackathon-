class UserInfo {
  constructor() {
    this.id = 0;
    this.users = JSON.parse(localStorage.getItem('users')) || [];
  }

  addUser({ firstName, lastName, password, phone, language, agree, email }) {
    const id = this.id;
    const newUser = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      password: password,
      phone: phone,
      language: language,
      agree: agree,
      email: email
    };
    this.users.push(newUser);
    this.id++;
    console.log(newUser)
    return newUser;
  }

  getUser(id) {
    return this.users.find(user => user.id === id);
  }

  getUsers() {
    return this.users;
  }

  findUserById(id) {
    return this.users.find(user => user.id === id);
  }

  removeUserById(id) {
    this.users = this.users.filter(user => user.id !== id);
  }
}

export default new UserInfo();
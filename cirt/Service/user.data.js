export const users = [
  {
    Name: "Michael",
    Surname: "Baker",
    Email: "michael@test.com",
    Cell_n: "0825558364",
  },
];

export function getAllUsers() {
  return this.users;
}

export function addUser(name, surname, email, cell_n) {
  let user = {
    Name: name,
    Surname: surname,
    Email: email,
    Cell_n: cell_n,
  };
  this.users.push(user);
  return true;
}
export function updateUser(name, surname, email, cell_n) {
  for (var i in users) {
    if (users[i].Name == name && users[i].Surname == surname) {
      users[i].Email = email;
      users[i].Cell_n = cell_n;
      return true; //Stop the loop to save memory, record needed is found!
    }
  }
}

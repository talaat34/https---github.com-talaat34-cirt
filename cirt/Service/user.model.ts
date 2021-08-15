export class User {
  Name: string | undefined;
  Surname: string | undefined;
  Email: string | undefined;
  Cell_no: string | undefined;

  constructor(name: string, surname: string, email: string, cell_no: string) {
    this.Name = name;
    this.Surname = surname;
    this.Email = email;
    this.Cell_no = cell_no;
  }
}

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;

  constructor( username: string,
               password: string) {
    this.id = (new Date()).getTime()
    this.username = username;
    this.password = password;
  }
}

import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';
import {USERS} from '../mock-data/user.mock.client';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserServiceClient {
  constructor(private httpClient: HttpClient) {}
  url: 'http://localhost:8080/';
  users: User[] = USERS;

  login(username: string, password: string) {
    console.log(this.users);

    return this.httpClient.post('http://localhost:8080/api/login',
      {
        username,
        password
      }, httpOptions);
    // for (let i = 0; i < this.users.length; i++) {
    //   const user = this.users[i];
    //   console.log(user);
    //   if (username === user.username &&
    //     password === user.password) {
    //     return user.username;
    //   }
    // }
  }

  register(user: User) {
    this.users.push(user);
    console.log(this.users);
    alert('Registered');
  }

  getAllUsers() {
    return this.users;
  }
}

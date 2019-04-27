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
  body: {
    'temp',
    'temp1'
  };

  login(username: string, password: string) {
    console.log(this.users);

    return this.httpClient.post('https://assignment9-webdev.herokuapp.com/api/login',
      {
        username,
        password
      }, httpOptions);
  }

  register(user: User) {
    console.log('client service');
    console.log(user);
    return this.httpClient.post('https://assignment9-webdev.herokuapp.com/api/register', user, httpOptions);
  }

  getProfile() {
    return this.httpClient.post('https://assignment9-webdev.herokuapp.com/api/profile', this.body, httpOptions);
  }

  updateProfile(user: User) {
    return this.httpClient.post('https://assignment9-webdev.herokuapp.com/api/update', user, httpOptions);
  }

  getAllUsers() {
    return this.users;
  }
}

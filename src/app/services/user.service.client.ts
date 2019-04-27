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

    return this.httpClient.post('http://localhost:8080/api/login',
      {
        username,
        password
      }, httpOptions);
  }

  register(user: User) {
    console.log('client service');
    console.log(user);
    return this.httpClient.post('http://localhost:8080/api/register', user, httpOptions);
  }

  getProfile() {
    return this.httpClient.post('http://localhost:8080/api/profile', this.body, httpOptions);
  }

  updateProfile(user: User) {
    return this.httpClient.post('http://localhost:8080/api/update', user, httpOptions);
  }

  getAllUsers() {
    return this.users;
  }
}

import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';
import {USERS} from '../mock-data/user.mock.client';
import {HttpClient, HttpHeaders} from '@angular/common/http';

// https://assignment9-webdev.herokuapp.com/

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})
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

  logout() {
    console.log('inside client service logout');
    return this.httpClient.get('https://assignment9-webdev.herokuapp.com/api/logout', httpOptions);
  }

  register(username: string, password: string) {
    console.log('client service');
    return this.httpClient.post('https://assignment9-webdev.herokuapp.com/api/register', {username, password}, httpOptions);
  }

  getProfile() {
    return this.httpClient.get('https://assignment9-webdev.herokuapp.com/api/profile', httpOptions);
  }

  updateProfile(user: User) {
    return this.httpClient.post('https://assignment9-webdev.herokuapp.com/api/update', user, httpOptions);
  }

  getAllUsers() {
    return this.httpClient.get('https://assignment9-webdev.herokuapp.com/api/user', httpOptions);
  }
}

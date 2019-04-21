import {Injectable} from '@angular/core';
import {User} from '../models/user.model.client';
import {USERS} from '../mock-data/user.mock.client';

@Injectable()
export class UserServiceClient {
  users: User[] = USERS;

  login(username: string, password: string) {
    console.log(this.users);
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      console.log(user);
      if (username === user.username &&
        password === user.password) {
        return user.username;
      }
    }
  }
}

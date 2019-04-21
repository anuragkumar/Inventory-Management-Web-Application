import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private userService: UserServiceClient,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    const user = this.userService.login(this.username, this.password);
    if (!user) {
      alert('Invalid Credentials');
      return;
    }
    if (user) {
      this.router.navigate(['inventory']);
    }
  }
}

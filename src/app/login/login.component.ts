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
    if (!this.username || !this.password) {
      alert('All fields are required');
      return;
    }
    this.userService.login(this.username, this.password)
      .subscribe(data => {
        alert('Logged in');
        this.router.navigate(['inventory']);
      },
        respose => {
          alert('Invalid Credentials');
      });
  }
}

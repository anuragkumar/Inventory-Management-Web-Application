import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  username: string;
  password: string;
  verifyPassword: string;

  user: User;

  constructor(private userService: UserServiceClient,
              private router: Router) { }

  ngOnInit() {
  }

  register() {
    if (!this.username || !this.password || !this.verifyPassword) {
      alert('All fields are necessary');
      return;
    }

    if (this.password !== this.verifyPassword) {
      alert('Passwords do not match');
      return;
    }

    console.log(this.username);
    console.log(this.password);

    this.userService.register(this.username, this.password).subscribe(user => {
      alert('Registered');
      this.router.navigate(['inventory']);
    }, response => {
      alert('Some error occurred ' + response);
    });
    //
    // this.userService.register(user);
    // this.router.navigate(['inventory']);
  }

}

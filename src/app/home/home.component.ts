import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedInUser: boolean;
  constructor(private userService: UserServiceClient,
              private router: Router) { }

  ngOnInit() {
    this.userService.getProfile().subscribe(data => {
      this.loggedInUser = true;
    }, error => {
      this.loggedInUser = false;
    });
  }

  logout() {
    console.log('inside logout function');
    this.userService.logout().subscribe(data => {
      alert('Logged out' + data);
      this.loggedInUser = null;
      this.router.navigate(['login']);
    }, error => {
      alert('Logged Out');
      this.loggedInUser = null;
      this.router.navigate(['login']);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private userService: UserServiceClient,
              private router: Router) { }

  ngOnInit() {
    // this.user.username = 'alice';
    // this.user.password = 'alice';
    // this.user.firstName = 'Alice';
    // this.user.lastName = 'Wonderland';
    // this.user.email = 'abc@xyz.com';

    this.userService.getProfile().subscribe(user => {
      this.user = user;
    }, response => {
      console.log(response);
      alert('Please login');
      this.router.navigate(['login']);
    });
  }

  update() {
    console.log('client component');
    console.log(this.user);
    this.userService.updateProfile(this.user).subscribe(data => {
      alert('Updated');
    }, res => {
      alert('Some error occurred');
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {Product} from '../models/product.model.client';
import {ProductServiceClient} from '../services/product.service.client';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  users: User[];
  products: Product[];
  constructor(private userService: UserServiceClient,
              private productService: ProductServiceClient) { }

  ngOnInit() {
    this.users = this.userService.getAllUsers();
    this.products = this.productService.getAllProducts();
  }

  getProductByUser(username: string) {
    this.products = this.productService.getProductsByUser(username);
  }
}

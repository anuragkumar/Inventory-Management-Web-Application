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
  users: any;
  products: Product[];
  sort: string;
  startDate: Date;
  endDate: Date;
  page: number;
  totalPages: number[];
  currentPage: number;
  lastPage: number;

  constructor(private userService: UserServiceClient,
              private productService: ProductServiceClient) { }

  ngOnInit() {
    this.sort = 'DESC';
    this.currentPage = 1;
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
    this.products = this.productService.getAllProducts(this.sort, this.currentPage);
    this.lastPage = this.productService.getTotalProducts();
    this.totalPages = Array(Math.ceil(this.lastPage / 6))
      .fill(1)
      .map((x, i) => x + i);
  }

  getProductByUser(username: string) {
    this.products = this.productService.getProductsByUser(username, this.currentPage);
  }

  sortByDate() {
    if (this.sort === 'DESC') {
      this.sort = 'ASC';
    } else {
      this.sort = 'DESC';
    }
    this.products = this.productService.getAllProducts(this.sort, this.currentPage);
  }

  filterByDate() {
    this.products = this.productService.filterByDate(this.startDate, this.endDate, this.currentPage);
    this.startDate = null;
    this.endDate = null;
  }

  changePage(page: number) {
    if (page === -1 && this.currentPage === 1) {
      this.currentPage = 1;
    } else if (page === -2 && this.currentPage === Math.ceil(this.lastPage / 6)) { // this has some bug
        this.currentPage = this.lastPage;
    } else if (page === -1 && this.currentPage !== 1) {
      this.currentPage -= 1;
    } else if (page === -2 && this.currentPage !== Math.ceil(this.lastPage / 6)) {
      this.currentPage += 1;
    } else {
      this.currentPage = page;
    }
  }

  editProduct(sku: number) {
  }
}

import {Injectable} from '@angular/core';
import {Product} from '../models/product.model.client';
import {PRODUCTS} from '../mock-data/product.mock.client';

@Injectable()
export class ProductServiceClient {
  products: Product[] = PRODUCTS;
  filteredProducts: Product[] = PRODUCTS;

  getAllProducts(sort: string) {
    console.log(this.products);
    if (sort === 'DESC') {
      return this.filteredProducts.sort((a, b) => {
        return b.created.getTime() - a.created.getTime();
      });
    }

    if (sort === 'ASC') {
      return this.filteredProducts.sort((a, b) => {
        return a.created.getTime() - b.created.getTime();
      });
    }
  }

  getProductsByUser(username: string) {
    if (username === 'All Users') {
      this.filteredProducts = this.products;
      return this.filteredProducts;
    } else {
      this.filteredProducts = this.products.filter((product) => product.user === username);
      return this.filteredProducts;
    }
  }

  filterByDate(startDate: Date, endDate: Date) {
    if (!startDate) {
      alert('Start Date cannot be empty');
      return this.filteredProducts;
    } else {
      if (!endDate) {
        startDate = new Date(startDate);
        this.filteredProducts = this.filteredProducts.filter((product) =>
          product.created.getTime() > startDate.getTime());
        return this.filteredProducts;
      } else {
        startDate = new Date(startDate);
        endDate = new Date(endDate);
        this.filteredProducts = this.filteredProducts.filter((product) =>
          product.created.getTime() > startDate.getTime() &&
          product.created.getTime() < endDate.getTime());
        return this.filteredProducts;
      }
    }
  }
}

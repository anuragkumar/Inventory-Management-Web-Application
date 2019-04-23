import {Injectable} from '@angular/core';
import {Product} from '../models/product.model.client';
import {PRODUCTS} from '../mock-data/product.mock.client';

@Injectable()
export class ProductServiceClient {
  products: Product[] = PRODUCTS;
  filteredProducts: Product[] = PRODUCTS;

  _getPerPageProducts(page: number) {
    const count = 6 * page;
    const flag = 0;
    const pageProduct = [];
    if (count === 6) {
      for (let i = 0; i < 6; i++) {
        pageProduct.push(this.filteredProducts[i]);
      }
    }
    this.filteredProducts = pageProduct;
    return this.filteredProducts;
  }

  getTotalProducts() {
    return this.products.length;
  }

  getAllProducts(sort: string, page: number) {
    console.log(this.products);
    // this.filteredProducts = this._getPerPageProducts(page);
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

  getProductsByUser(username: string, page: number) {
    if (username === 'All Users') {
      this.filteredProducts = this.products;
      return this.filteredProducts;
    } else {
      this.filteredProducts = this.products.filter((product) => product.user === username);
      return this.filteredProducts;
    }
  }

  filterByDate(startDate: Date, endDate: Date, page: number) {
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

import {Injectable} from '@angular/core';
import {Product} from '../models/product.model.client';
import {PRODUCTS} from '../mock-data/product.mock.client';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Injectable()
export class ProductServiceClient {
  products: Product[] = PRODUCTS;

  getAllProducts() {
    console.log(this.products);
    return this.products.sort((a, b) => {
      return b.created.getTime() - a.created.getTime();
    });
  }

  getProductsByUser(username: string) {
    if (username === 'All Users') {
      return this.products;
    } else {
      return this.products.filter((product) => product.user === username);
    }
  }
}

import {Injectable} from '@angular/core';
import {Product} from '../models/product.model.client';
import {PRODUCTS} from '../mock-data/product.mock.client';

@Injectable()
export class ProductServiceClient {
  products: Product[] = PRODUCTS;

  getAllProducts(sort: string) {
    console.log(this.products);
    if (sort === 'DESC') {
      return this.products.sort((a, b) => {
        return b.created.getTime() - a.created.getTime();
      });
    }

    if (sort === 'ASC') {
      return this.products.sort((a, b) => {
        return a.created.getTime() - b.created.getTime();
      });
    }
  }

  getProductsByUser(username: string) {
    if (username === 'All Users') {
      return this.products;
    } else {
      return this.products.filter((product) => product.user === username);
    }
  }
}

import {Product} from '../models/product.model.client';

export let PRODUCTS: Product[] = [
  new Product('IPhoneX', new Date('2011-07-14 11:23:00'), 'alice'),
  new Product('IPhoneXs', new Date('2011-07-18 11:23:00'), 'alice'),
  new Product('Samsung Note 4', new Date('2019-04-20 11:23:00'), 'alice'),
  new Product('Google Pixel 2', new Date('2019-04-21 11:23:00'), 'bob'),
  new Product('OnePlus 5', new Date('2019-03-17 11:23:00'), 'bob'),
  new Product('Redme 4', new Date('2019-03-18 11:23:00'), 'bob'),
];

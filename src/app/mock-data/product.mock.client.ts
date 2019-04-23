import {Product} from '../models/product.model.client';

export let PRODUCTS: Product[] = [
  new Product('IPhoneX', new Date('2011-07-14 11:23:00'), 'alice'),
  new Product('IPhoneXs', new Date('2011-07-18 11:23:00'), 'alice'),
  new Product('Samsung Note 4', new Date('2019-04-20 11:23:00'), 'alice'),
  new Product('Google Pixel 2', new Date('2019-04-21 11:23:00'), 'bob'),
  new Product('OnePlus 5', new Date('2019-03-17 11:23:00'), 'bob'),
  new Product('Redme 4', new Date('2019-03-18 11:23:00'), 'bob'),

  new Product('Alienware', new Date('2012-07-14 11:23:00'), 'alice'),
  new Product('Dell XPS', new Date('2012-07-18 11:23:00'), 'alice'),
  new Product('Lenovo Thinkpad', new Date('2012-04-20 11:23:00'), 'alice'),
  new Product('Apple pro', new Date('2018-04-21 11:23:00'), 'bob'),
  new Product('Acer', new Date('2019-03-27 11:23:00'), 'bob'),
  new Product('HP', new Date('2016-03-18 11:23:00'), 'bob'),

  new Product('Dominos', new Date('2016-07-14 11:23:00'), 'alice'),
  new Product('Pizza Hut', new Date('2017-07-18 11:23:00'), 'alice'),
  new Product('Blaze Pizza', new Date('2019-04-10 11:23:00'), 'alice'),
  new Product('UHOP', new Date('2013-04-21 11:23:00'), 'bob'),
  new Product('California Pizza', new Date('2005-03-17 11:23:00'), 'bob'),
  new Product('Mexican Pizza', new Date('2019-01-18 11:23:00'), 'bob'),

  new Product('Adidas', new Date('2019-01-14 11:23:00'), 'alice'),
  new Product('Puma', new Date('2018-09-19 11:23:00'), 'alice'),
  new Product('Jordan', new Date('2017-05-23 11:23:00'), 'alice'),
  new Product('Nike', new Date('2019-04-13 11:23:00'), 'bob'),
  new Product('Sandle', new Date('2011-10-17 11:23:00'), 'bob'),
  new Product('Reliance', new Date('2014-11-18 11:23:00'), 'bob'),

  new Product('Pepsi', new Date('2019-01-30 11:23:00'), 'alice'),
  new Product('Coca Cola', new Date('2019-02-27 11:23:00'), 'alice'),
  new Product('Canada Dry', new Date('2019-03-01 11:23:00'), 'alice'),
  new Product('Fanta', new Date('2018-03-24 11:23:00'), 'bob'),
];

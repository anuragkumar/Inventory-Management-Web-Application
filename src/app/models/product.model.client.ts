export class Product {
  id: number;
  title: string;
  created: Date;
  user: string;
  sku: number;

  constructor(title: string, created: Date, user: string) {
    this.id = (new Date()).getTime();
    this.title = title;
    this.created = created;
    this.user = user;
    this.sku = (new Date()).getTime();
  }
}

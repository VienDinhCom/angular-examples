import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Product, productsData } from "../data/products.data";

// Chạy trước khi route được nạp
// Giống như Page.getInitialProps() của NextJS

@Injectable()
export class ProductsResolver implements Resolve<Product[]> {
  constructor() {}

  resolve() {
    return new Promise<Product[]>(resolve => {
      setTimeout(() => {
        resolve(productsData);
      }, 1000);
    });
  }
}

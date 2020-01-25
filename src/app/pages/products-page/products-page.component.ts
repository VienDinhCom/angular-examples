import { Component, OnInit } from "@angular/core";
import { productsData } from "../../data/products.data";
import { Router } from "@angular/router";

@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.scss"]
})
export class ProductsPageComponent implements OnInit {
  products = productsData;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToProductPage(productId: number) {
    this.router.navigate([`/products/${productId}`]);
  }
}

import { Component, OnInit } from "@angular/core";
import { productsData } from "../../data/products.data";

@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.scss"]
})
export class ProductsPageComponent implements OnInit {
  products = productsData;

  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from "@angular/core";
import { productsData } from "../../data/products.data";

@Component({
  selector: "app-product-list-page",
  templateUrl: "./product-list-page.component.html",
  styleUrls: ["./product-list-page.component.scss"]
})
export class ProductListPageComponent implements OnInit {
  products = productsData;
  query: string;

  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product, productsData } from "src/app/data/products.data";

@Component({
  selector: "app-product-detail-page",
  templateUrl: "./product-detail-page.component.html",
  styleUrls: ["./product-detail-page.component.scss"]
})
export class ProductDetailPageComponent implements OnInit {
  product: Product;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(({ productId }) => {
      this.product = productsData.find(({ id }) => productId === id);
    });
  }
}

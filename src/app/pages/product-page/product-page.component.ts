import { Component, OnInit } from "@angular/core";
import { productsData, Product } from "../../data/products.data";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.scss"]
})
export class ProductPageComponent implements OnInit {
  product: Product;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    const product = productsData.find(({ id }) => {
      return id === parseInt(this.activatedRoute.snapshot.params["id"]);
    });

    if (product) {
      this.product = product;
    } else {
      this.router.navigate(["/404"]);
    }
  }

  ngOnInit() {}
}

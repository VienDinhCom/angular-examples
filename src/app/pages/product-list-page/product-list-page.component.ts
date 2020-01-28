import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/data/products.data";
import { skip } from "rxjs/operators";

@Component({
  selector: "app-product-list-page",
  templateUrl: "./product-list-page.component.html",
  styleUrls: ["./product-list-page.component.scss"]
})
export class ProductListPageComponent implements OnInit {
  products: Product[] = [];

  constructor(private route: ActivatedRoute) {
    this.products = this.route.snapshot.data.products;
  }

  ngOnInit() {
    this.route.data.pipe(skip(1)).subscribe(({ products }) => {
      this.products = products;
    });
  }
}

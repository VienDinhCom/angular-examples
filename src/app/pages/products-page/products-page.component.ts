import { Component, OnInit } from "@angular/core";
import { skip } from "rxjs/operators";
import { productsData, Product } from "../../data/products.data";
import * as paginate from "paginate-array";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.scss"]
})
export class ProductsPageComponent implements OnInit {
  products: Product[];
  totalPages: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    const pageNumber = parseInt(
      this.activatedRoute.snapshot.queryParams["pageNumber"] || 1
    );

    const { data, totalPages } = paginate(productsData, pageNumber, 5);

    this.products = data;
    this.totalPages = totalPages;
  }

  ngOnInit() {
    this.activatedRoute.queryParams
      .pipe(skip(1))
      .subscribe(({ pageNumber }) => {
        const { data } = paginate(productsData, pageNumber, 5);
        this.products = data;
      });
  }

  // navigateToPageNumber(pageNumber: number) {
  //   this.router.navigate([`/products`], {
  //     queryParams: {
  //       pageNumber
  //     }
  //   });
  // }
}

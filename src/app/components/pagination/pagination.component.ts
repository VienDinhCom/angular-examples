import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"]
})
export class PaginationComponent implements OnInit {
  @Input() totalPages: number;
  @Output() change = new EventEmitter<number>();
  @Input() link: string;

  pageNumbers: number[] = [];

  constructor() {}

  ngOnInit() {
    this.pageNumbers = [...Array(this.totalPages).keys()].map(
      pageNumber => pageNumber + 1
    );
  }
}

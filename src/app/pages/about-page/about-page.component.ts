import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-about-page",
  templateUrl: "./about-page.component.html",
  styleUrls: ["./about-page.component.scss"]
})
export class AboutPageComponent implements OnInit {
  title: string;
  content: string;

  constructor(private route: ActivatedRoute) {
    const { title, content } = this.route.snapshot.data;

    this.title = title;
    this.content = content;
  }

  ngOnInit() {}
}

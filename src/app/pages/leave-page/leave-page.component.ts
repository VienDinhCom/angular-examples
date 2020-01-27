import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-leave-page",
  templateUrl: "./leave-page.component.html",
  styleUrls: ["./leave-page.component.scss"]
})
export class LeavePageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  canLeave() {
    return "Do you really want to leave this page?";
  }
}

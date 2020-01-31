import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-me-page",
  templateUrl: "./me-page.component.html",
  styleUrls: ["./me-page.component.scss"]
})
export class MePageComponent implements OnInit {
  user;

  constructor(private userService: UsersService) {
    this.userService.getCurrent().subscribe(({ users }) => {
      this.user = users[0];
    });
  }

  ngOnInit() {}
}

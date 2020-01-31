import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-me-page",
  templateUrl: "./me-page.component.html",
  styleUrls: ["./me-page.component.scss"]
})
export class MePageComponent implements OnInit {
  constructor(private authService: AuthService) {}

  user$ = this.authService.getUser();

  ngOnInit() {}
}

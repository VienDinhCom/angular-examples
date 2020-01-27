import { Component } from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  authenticated: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.authenticated = this.authService.authenticated;
  }

  onLogin() {
    this.authService.login();
    this.authenticated = this.authService.authenticated;
  }

  onLogout() {
    this.authService.logout();
    this.authenticated = this.authService.authenticated;
    this.router.navigate(["/"]);
  }
}

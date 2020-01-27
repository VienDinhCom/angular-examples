import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  authenticated = false;

  isAuthenticated() {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.authenticated), 1000);
    });
  }

  login() {
    this.authenticated = true;
  }

  logout() {
    this.authenticated = false;
  }
}

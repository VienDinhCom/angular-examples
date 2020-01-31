import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  getCurrent() {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:lookup`;
    const { idToken } = this.authService.getTokens();

    return this.http.post<any>(url, { idToken });
  }
}

import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { HttpClient } from "@angular/common/http";

const API_KEY = "AIzaSyC_RmXfIE444YaggT8pHaIpVdqwiDKoDm4";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  getCurrent() {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`;
    const { idToken } = this.authService.getTokens();

    return this.http.post<any>(url, { idToken });
  }
}

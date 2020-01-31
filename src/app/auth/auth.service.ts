import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";

const API_KEY = "AIzaSyC_RmXfIE444YaggT8pHaIpVdqwiDKoDm4";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(email: string, password: string) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

    this.http
      .post<User>(url, { email, password, returnSecureToken: true })
      .subscribe(this.setToken);
  }

  login(email: string, password: string) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

    this.http
      .post<User>(url, { email, password, returnSecureToken: true })
      .subscribe(this.setToken);
  }

  setToken(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getToken(): User {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch (error) {
      return null;
    }
  }

  refreshToken() {
    const url = `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`;
    const { refreshToken } = this.getToken();

    this.http
      .post<User>(url, {
        grant_type: "refresh_token",
        refresh_token: refreshToken
      })
      .subscribe(this.setToken);
  }

  getUser() {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`;
    const { idToken } = this.getToken();

    return this.http.post<any>(url, { idToken });
  }
}

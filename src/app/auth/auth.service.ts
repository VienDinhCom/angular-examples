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
      .subscribe(this.handleAuth);
  }

  login(email: string, password: string) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

    this.http
      .post<User>(url, { email, password, returnSecureToken: true })
      .subscribe(this.handleAuth);
  }

  handleAuth(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getIdToken() {
    try {
      const { idToken }: User = JSON.parse(localStorage.getItem("user"));
      return idToken;
    } catch (error) {
      return null;
    }
  }

  getUser() {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`;
    const idToken = this.getIdToken();

    return this.http.post<any>(url, { idToken });
  }
}
